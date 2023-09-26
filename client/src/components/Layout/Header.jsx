import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Profile from "./Profile";
import Logo from "../Logo/Logo";
import classes from "./Header.module.css";
import Navbar from "./Navbar";

const Header = (props) => {
    const location = useLocation();
    return (
        <header className={`${classes.header} ${classes.test}`}>
            <Logo />
            <Navbar />
            <Profile user={props.user} />
        </header>
    );
};
export default Header;
