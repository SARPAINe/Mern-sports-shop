import { rest } from "lodash";
import CartIcon from "./CartIcon";
import classes from "./Cart.module.css";

const Cart = (props) => {
    return (
        <div className={classes.cart}>
            <span>Cart</span>
            <CartIcon />
        </div>
    );
};
export default Cart;
