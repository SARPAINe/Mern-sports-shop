import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import classes from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Cart from "../Cart/Cart";
import User from "./User";

const Header = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const sidebarRef = useRef();

    const openMenu = () => {
        sidebarRef.current.style.width = "95%";
        setShowMenu(true);
    };
    const closeMenu = () => {
        sidebarRef.current.style.width = "0%";
        setShowMenu(false);
    };
    return (
        <header className={`${classes.header} ${classes.test}`}>
            <div
                className={classes.sidenav}
                ref={sidebarRef}
                onClick={closeMenu}
            >
                <div className={classes.sidenav_header}>
                    <Logo />
                    <a
                        onClick={closeMenu}
                        style={{ cursor: "pointer", scale: "2" }}
                    >
                        &times;
                    </a>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Link to={"/"}>Home</Link>
                    <Link to={"about"}>About</Link>
                    <Link to={"products"}>Products</Link>
                </div>
                <div>
                    <Cart></Cart>
                    <User user={props.user}></User>
                </div>
            </div>
            <Logo />
            <div className={classes.navbar}>
                <Link to={"/"}>Home</Link>
                <Link to={"about"}>About</Link>
                <Link to={"products"}>Products</Link>
            </div>
            <div className={classes.profile}>
                <Cart></Cart>
                <User user={props.user}></User>
            </div>
            <div className={classes.hamburgerButton} onClick={openMenu}>
                <GiHamburgerMenu />
            </div>
        </header>
    );
};
export default Header;
