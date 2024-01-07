import { Link, useLoaderData, useNavigate } from "react-router-dom";
import BreadCrumb from "../components/Layout/BreadCrumb";
import ProductDetailBody from "../components/ProductDetail/ProductDetailBody";

const ProductDetail = () => {
    const loaderData = useLoaderData();
    const navigate = useNavigate();
    const product = loaderData.product;
    const name = product.name;

    let crumbs = ["Products", name];
    const backToAllProductsStyle = {
        // margin: "400px var(--left-space)",
        // padding: "20px 0",
        backgroundColor: "var(--theme-color)",
        color: "white",
        borderRadius: "4%",
        fontSize: "20px",
    };

    return (
        <>
            <BreadCrumb crumbs={crumbs}></BreadCrumb>
            <div
                style={{
                    // display: "inline-block",
                    marginTop: "10px",
                    marginLeft: "var(--left-space)",
                    // width: "200px",
                }}
            >
                <Link
                    style={backToAllProductsStyle}
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    Back to products
                </Link>
                <ProductDetailBody product={product}></ProductDetailBody>
            </div>
        </>
    );
};
export default ProductDetail;

export const productDetailLoader = async ({ req, params }) => {
    const response = await fetch(
        `${process.env.server_url}/api/v1/products/${params.id}`
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
