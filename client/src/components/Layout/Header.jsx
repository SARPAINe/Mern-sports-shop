import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Profile from "./Profile";
import Logo from "../Logo/Logo";
import classes from "./Header.module.css";
import Navbar from "./Navbar";
import UsernameContext from "./UsernameContext";

const Header = (props) => {
    const location = useLocation();
    const path = location.pathname;
    const [userName, setUserName] = useState();
    return (
        <UsernameContext.Provider value={{ userName, setUserName }}>
            <header className={`${classes.header} ${classes.test}`}>
                <Logo />
                <Navbar />
                <Profile />
            </header>
        </UsernameContext.Provider>
    );
};
export default Header;
