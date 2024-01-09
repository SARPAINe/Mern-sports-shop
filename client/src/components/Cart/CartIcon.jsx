import { useContext } from "react";
import classes from "./CartIcon.module.css";
import { BsCart4 } from "react-icons/bs";
import CartContext from "../Store/cart-context";

const CartIcon = (props) => {
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    const numberOfCartItem = items.reduce((curNumber, item) => {
        console.log(`curNumber: ${curNumber}`);
        console.log(`itme: ${item.amount}`);
        return curNumber + item.amount;
    }, 0);

    return (
        <div>
            <BsCart4 className={classes["cart-icon"]} />
            <span>
                <sup className={classes.count}>{numberOfCartItem}</sup>
            </span>
        </div>
    );
};
export default CartIcon;
