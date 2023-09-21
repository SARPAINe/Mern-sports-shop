import { Outlet, useLocation } from "react-router-dom";
import Profile from "./Profile";
import Logo from "../Logo/Logo";
import classes from "./Header.module.css";
import Navbar from "./Navbar";
const Header = (props) => {
    const location = useLocation();
    const path = location.pathname;
    return (
        <div>
            <header className={`${classes.header} ${classes.test}`}>
                <Logo />
                <Navbar />
                <Profile />
            </header>
        </div>
    );
};
export default Header;
