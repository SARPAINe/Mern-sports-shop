import { useEffect, useState } from "react";
import { Outlet, useLoaderData, json } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "./Footer";
const RootLayout = (props) => {
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
                {/* {props.children} */}
                <Outlet></Outlet>
            </main>
            <Footer />
        </>
    );
};

export default RootLayout;

export const loader = async ({ request, params }) => {
    const requestUrl = `${process.env.server_url}/api/v1/users/showMe`;

    const response = await fetch(requestUrl, {
        credentials: "include",
    });

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
