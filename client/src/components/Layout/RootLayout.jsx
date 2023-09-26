import { useEffect, useState } from "react";
import {
    json,
    Outlet,
    useActionData,
    useLocation,
    useNavigate,
} from "react-router-dom";
import axios from "axios";
import Header from "../Layout/Header";
import Footer from "./Footer";
const RootLayout = (props) => {
    console.log("root layout");
    const location = useLocation();
    const [userName, setUserName] = useState();
    const [userId, setUserId] = useState();
    useEffect(() => {
        const showMe = async () => {
            let res;
            try {
                res = await axios.get(
                    "http://localhost:5000/api/v1/users/showMe",
                    {
                        withCredentials: true,
                    }
                );
            } catch (err) {
                if (err.response.status === 401) {
                    setUserName(null);
                    setUserId(null);
                }
                if (err.message) {
                    console.log(err.message);
                    throw json({ message: err.message }, { status: 500 });
                }
                return;
            }
            console.log("Entered in root useEffect");
            if (res.data.user) {
                setUserName(res.data.user.name);
                setUserId(res.data.user.userId);
            }
        };
        showMe();
    }, [location]);
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
