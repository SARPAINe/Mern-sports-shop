import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
    return (
        <div className={classes.navbar}>
            <Link to={"/"}>Home</Link>
            <Link to={"about"}>About</Link>
            <Link to={"products"}>Products</Link>
        </div>
    );
};
export default Navbar;
