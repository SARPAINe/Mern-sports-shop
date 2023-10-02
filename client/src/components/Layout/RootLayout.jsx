import { useEffect, useState } from "react";
import {
    Outlet,
    useLoaderData,
    useNavigate,
    json,
    useActionData,
} from "react-router-dom";
import axios from "axios";
import Header from "../Layout/Header";
import Footer from "./Footer";
const RootLayout = (props) => {
    console.log("Root layout is being reloaded");
    const [userName, setUserName] = useState();
    const [userId, setUserId] = useState();
    let loaderData = useLoaderData();

    useEffect(() => {
        if (loaderData && loaderData !== "logged out") {
            setUserName(loaderData.user.name);
            setUserId(loaderData.user.userId);
        } else {
            setUserName(null);
            setUserId(null);
        }
    }, [loaderData]);
    return (
        <>
            <Header user={{ userName, userId }}></Header>
            <main>
                {console.log("reloaded")}
                {props.children}
                <Outlet></Outlet>
            </main>
            <Footer />
        </>
    );
};

export default RootLayout;

export const loader = async ({ request, params }) => {
    const requestUrl = "http://localhost:5000/api/v1/users/showMe";

    const response = await fetch("http://localhost:5000/api/v1/users/showMe", {
        credentials: "include",
    });
    console.log(response);

    //when an error gets thrown in a loader react router will simply render the closest error element
    if (!response.ok) {
        if (response.status == 401) return "logged out";
        else {
            throw json(
                {
                    message: "Something went wrong",
                },
                { status: 500 }
            );
        }
    } else {
        // const resData = await response.json();
        // //browser now supports this response constructor
        // const res = new Response("any data", {
        //     status: 201,
        // });
        return response;
    }
};
