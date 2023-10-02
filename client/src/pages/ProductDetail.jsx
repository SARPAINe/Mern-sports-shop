import { useLoaderData, useLocation } from "react-router-dom";
import BreadCrumb from "../components/Layout/BreadCrumb";

const ProductDetail = () => {
    const loaderData = useLoaderData();
    const product = loaderData.product;
    const name = product.name;
    console.log(name);

    let crumbs = ["Products", name];

    return (
        <>
            <BreadCrumb crumbs={crumbs}></BreadCrumb>
        </>
    );
};
export default ProductDetail;

export const productDetailLoader = async ({ req, params }) => {
    const response = await fetch(
        `http://localhost:5000/api/v1/products/${params.id}`
    );

    //when an error gets thrown in a loader react router will simply render the closest error element
    if (!response.ok) {
        // return { isError: true, message: "Could not fetch events" };
        // throw new Response(
        //     JSON.stringify({ message: "Could not fetch events." }),
        //     { status: 500 }
        // );
        throw json(
            {
                message: "Could not fetch product details.",
            },
            { status: 500 }
        );
    } else {
        // const resData = await response.json();
        // //browser now supports this response constructor
        // const res = new Response("any data", {
        //     status: 201,
        // });
        return response;
    }
};
