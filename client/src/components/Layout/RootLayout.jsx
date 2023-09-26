import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Layout/Header";
import Footer from "./Footer";
const RootLayout = (props) => {
    console.log("Root layout is being reloaded");
    const [userName, setUserName] = useState();
    const [userId, setUserId] = useState();
    useEffect(() => {
        const showMe = async () => {
            let res = await axios.get(
                "http://localhost:5000/api/v1/users/showMe",
                {
                    withCredentials: true,
                }
            );
            console.log("Entered in root useEffect");
            setUserName(res.data.user.name);
            setUserId(res.data.user.userId);
        };
        showMe();
    }, [userName, userId]);
    return (
        <>
            <Header user={{ userName, userId }}></Header>
            <main>
                {console.log("reloaded")}
                <Outlet></Outlet>
            </main>
            <Footer />
        </>
    );
};

export default RootLayout;
