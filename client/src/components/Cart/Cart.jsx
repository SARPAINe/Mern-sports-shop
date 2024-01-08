import { rest } from "lodash";
import CartIcon from "./CartIcon";
import classes from "./Cart.module.css";
import { Link } from "react-router-dom";

const Cart = (props) => {
    return (
        <div className={classes.cart}>
            <Link to={"/cart"}>
                <span>Cart</span>
            </Link>
            <CartIcon />
        </div>
    );
};
export default Cart;
