import classes from "./ProductDetailBody.module.css";
import ReactStars from "react-rating-stars-component";
import _ from "lodash";
import { useContext, useState } from "react";
import CartContext from "../Store/cart-context";
const ProductDetailBody = ({ product }) => {
    console.log(product);
    const [amount, setAmount] = useState(0);
    // const [cart, setCart] = useState(null);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    console.log("items:", items);

    const increaseAmount = () => {
        setAmount((prevAmount) => prevAmount + 1);
    };

    const decreaseAmount = () => {
        setAmount((prevAmount) => {
            if (prevAmount == 0) return prevAmount;
            else return prevAmount - 1;
        });
    };

    const addToCartHandler = () => {
        const item = {
            id: product._id,
            price: product.price,
            amount,
        };
        cartCtx.addItem(item);
        cartCtx.addToLocalStorage();
    };

    return (
        <>
            <div className={classes.product_detail}>
                <div className={classes.product_detail_image}>
                    <img src={product.image}></img>
                </div>
                <div className={classes.product_detail_info}>
                    <div className={classes.name}>{product.name}</div>
                    <div className={classes.review}>
                        <ReactStars
                            count={5}
                            value={product.averageRating}
                            isHalf={true}
                            size={24}
                            edit={false}
                            activeColor={"rgb(37, 150, 190)"}
                        ></ReactStars>
                        <span>{` (${product.numOfReviews} user reviews)`}</span>
                    </div>
                    <div
                        style={{ color: "var(--theme-color)" }}
                    >{`$${product.price}`}</div>
                    <div
                        className={classes.description}
                    >{`${product.description}`}</div>
                    <div>
                        <span style={{ fontWeight: "bold" }}>Available:</span>{" "}
                        &nbsp;&nbsp;
                        {product.inventory > 0 ? "In stock" : "Out of stock"}
                    </div>
                    <div>
                        <span style={{ fontWeight: "bold" }}>Brand:</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {_.capitalize(`${product.company}`)}
                    </div>
                    <hr style={{ width: "100%" }} />
                    <div className={classes.add_to_cart}>
                        <span
                            style={{ cursor: "pointer" }}
                            onClick={decreaseAmount}
                        >
                            {"  "}-{"  "}
                        </span>
                        {amount}
                        <span
                            style={{ cursor: "pointer" }}
                            onClick={increaseAmount}
                        >
                            {"  "}+{"  "}
                        </span>
                    </div>
                    <button
                        className={classes.add_to_cart_button}
                        onClick={addToCartHandler}
                    >
                        ADD TO CART
                    </button>
                </div>
            </div>
        </>
    );
};
export default ProductDetailBody;
