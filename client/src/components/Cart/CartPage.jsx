import { useContext } from "react";
import CartContext from "../Store/cart-context";
import classes from "./CartPage.module.css";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
const CartPage = (props) => {
    const cartCtx = useContext(CartContext);
    const { items: cartItems } = JSON.parse(localStorage.getItem("cart"));
    const cartIsEmpty = cartItems.length == 0 ? true : false;

    const cartIsEmptyContent = (
        <div className={classes.cart_empty}>
            <h1>Your cart is empty</h1>
            <Link to={"/products"}>FILL IT</Link>
        </div>
    );

    const modifiedCartItems = cartItems.map((item) => {
        return {
            ...item,
            subtotal: item.price * item.amount,
        };
    });
    const increaseAmount = (item) => {
        cartCtx.addItem(item);
        cartCtx.addToLocalStorage();
    };
    const decreaseAmount = (id) => {
        cartCtx.removeItem(id);
        cartCtx.addToLocalStorage();
    };
    const removeItem = (id) => {
        cartCtx.removeWholeItem(id);
        cartCtx.addToLocalStorage();
    };
    const clearCart = () => {
        cartCtx.clearCart();
        cartCtx.addToLocalStorage();
    };
    const cartValues = modifiedCartItems.map((item) => {
        return (
            <div className={classes.row}>
                <div>{item.name}</div>
                <div>{item.price}</div>
                <div className={classes.add_to_cart}>
                    <span
                        style={{ cursor: "pointer" }}
                        onClick={decreaseAmount.bind(null, item.id)}
                    >
                        {"  "}-{"  "}
                    </span>
                    {item.amount}
                    <span
                        style={{ cursor: "pointer" }}
                        onClick={increaseAmount.bind(null, {
                            id: item.id,
                            price: item.price,
                            amount: 1,
                            name: item.name,
                        })}
                    >
                        {"  "}+{"  "}
                    </span>
                </div>
                <div>{item.subtotal}</div>
                <div
                    onClick={removeItem.bind(null, item.id)}
                    style={{ cursor: "pointer" }}
                >
                    <MdDelete></MdDelete>
                </div>
            </div>
        );
    });
    return (
        <>
            {cartIsEmpty ? (
                cartIsEmptyContent
            ) : (
                <div className={classes.cart_page}>
                    <div className={classes.cart_header}>
                        <div>Item</div>
                        <div>Price</div>
                        <div>Quantity</div>
                        <div>Subtotal</div>
                        <div style={{ visibility: "hidden" }}>test</div>
                    </div>
                    <hr
                        style={{
                            width: "100%",
                            backgroundColor: "var(--theme-color)",
                            height: "1px",
                        }}
                    ></hr>
                    {cartValues}
                    <hr
                        style={{
                            width: "100%",
                            backgroundColor: "var(--theme-color)",
                            height: "1px",
                        }}
                    ></hr>
                    <div className={classes.cart_footer}>
                        <button>
                            <Link to={"/products"}>Continue Shopping</Link>
                        </button>
                        <button
                            style={{ cursor: "pointer" }}
                            onClick={clearCart}
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default CartPage;
