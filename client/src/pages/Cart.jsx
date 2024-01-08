// import { json, useLoaderData, useNavigation } from "react-router-dom";
// import ProductBody from "../components/Product/ProductBody";

import { useContext } from "react";
import BreadCrumb from "../components/Layout/BreadCrumb";
import CartContext from "../components/Store/cart-context";

// import ProductCard from "../components/Product/ProductCard";
const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    console.log(cartCtx.items);
    console.log(cartCtx.totalAmount);
    return (
        <>
            <BreadCrumb></BreadCrumb>
            <p style={{ marginLeft: "var(--left-space)" }}>Cart Page</p>
        </>
    );
};
export default Cart;

// export const productLoader = async ({ request }) => {
//     //server url
//     const requestUrl = `${process.env.server_url}/api/v1/products`;
//     const finalRequestUrl = new URL(requestUrl);

//     const url = new URL(request.url);
//     const page = url.searchParams.get("page");
//     const sort = url.searchParams.get("sort");
//     if (page) {
//         finalRequestUrl.searchParams.append("page", page);
//     }
//     if (sort) {
//         finalRequestUrl.searchParams.append("sort", sort);
//     }

//     const response = await fetch(finalRequestUrl.href);

//     //when an error gets thrown in a loader react router will simply render the closest error element
//     if (!response.ok) {
//         // return { isError: true, message: "Could not fetch events" };
//         // throw new Response(
//         //     JSON.stringify({ message: "Could not fetch events." }),
//         //     { status: 500 }
//         // );
//         throw json(
//             {
//                 message: "Could not fetch products.",
//             },
//             { status: 500 }
//         );
//     } else {
//         // const resData = await response.json();
//         // //browser now supports this response constructor
//         // const res = new Response("any data", {
//         //     status: 201,
//         // });
//         return response;
//     }
// };
