import classes from "./CartIcon.module.css";
import { BsCart4 } from "react-icons/bs";

const CartIcon = (props) => {
    const numberOfItems = 4;
    return (
        <div>
            <BsCart4 className={classes["cart-icon"]} />
            <span>
                <sup className={classes.count}>{numberOfItems}</sup>
            </span>
        </div>
    );
};
export default CartIcon;
