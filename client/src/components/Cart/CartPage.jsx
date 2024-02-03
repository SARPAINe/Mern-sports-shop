import { useContext } from "react";
import CartContext from "../Store/cart-context";
import classes from "./CartPage.module.css";
import { MdDelete } from "react-icons/md";
import { Link, useRouteLoaderData } from "react-router-dom";
import LinkButton from "../Button/LinkButton";
import ActionButton from "../Button/ActionButton";
const CartPage = (props) => {
    const cartCtx = useContext(CartContext);
    const cart = JSON.parse(localStorage.getItem("cart"));
    let loaderData = useRouteLoaderData("root");
    console.log(loaderData);
    let cartIsEmpty, cartItems;
    if (cart == null) {
        cartIsEmpty == true;
        cartItems = [];
    } else {
        cartItems = cart.items;

        console.log(cart.items);
    }
    cartIsEmpty = cartItems?.length == 0 ? true : false;

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
            <div className={classes.row} key={item.id}>
                <div className={classes.cart_product}>
                    <img
                        className={classes.cart_image}
                        src={item.image}
                        alt=""
                    />
                    <div> {item.name}</div>
                </div>
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
                    <MdDelete
                        style={{ color: "white", background: "red" }}
                    ></MdDelete>
                </div>
            </div>
        );
    });

    const checkoutContent = loaderData?.user ? (
        <Link
            to={"/checkout"}
            // state={{
            //     amount: Number((cartCtx.totalAmount + 5).toFixed(2)) * 100,
            // }}
        >
            Checkout
        </Link>
    ) : (
        <Link to={"/login"}>Login</Link>
    );
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
                        className={`${classes.cart_hr} ${classes.cart_hr_first}`}
                    ></hr>
                    {cartValues}
                    <hr className={classes.cart_hr}></hr>
                    <div className={classes.cart_footer}>
                        <LinkButton
                            name="Continue Shopping"
                            link="/products"
                        ></LinkButton>
                        {/* <button
                            className={classes.cart_clear}
                            onClick={clearCart}
                        >
                            Clear Cart
                        </button> */}
                        <ActionButton
                            style={{
                                backgroundColor: "black",
                                color: "white",
                            }}
                            clickHandler={clearCart}
                            name="Clear Cart"
                        ></ActionButton>
                    </div>
                    <div className={classes.cart_checkout}>
                        <div className={classes.cart_total}>
                            <div>
                                <span>Subtotal:</span>
                                {`           $${cartCtx.totalAmount.toFixed(
                                    2
                                )}`}
                            </div>
                            <div>
                                <span>Shipping Fee:</span>
                                {`   $5`}
                            </div>
                            <hr
                                style={{
                                    width: "100%",
                                    backgroundColor: "var(--theme-color)",
                                    height: "1px",
                                }}
                            ></hr>
                            <div>
                                <span>Order Total:</span>
                                {`     $${(cartCtx.totalAmount + 5).toFixed(
                                    2
                                )}`}
                            </div>
                        </div>
                        <div className={classes.cart_checkout_footer}>
                            {checkoutContent}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CartPage;
