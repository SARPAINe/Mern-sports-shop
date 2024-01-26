import { json, useLoaderData, useNavigation } from "react-router-dom";
import ProductBody from "../components/Product/ProductBody";
import ProductCard from "../components/Product/ProductCard";
import { random } from "lodash";
const Products = (props) => {
    const loaderData = useLoaderData();
    const navigation = useNavigation();

    const products = loaderData.products;
    console.log(loaderData);
    const numberOfProducts = loaderData.count;
    const numberOfPages = loaderData.numOfPages;
    const productData = products.map(({ _id, name, image, price }) => {
        return (
            <ProductCard
                key={_id}
                product_id={_id}
                name={name}
                image={image}
                price={price}
            ></ProductCard>
        );
    });
    return (
        <>
            {navigation.state == "loading" ? (
                <p style={{ marginLeft: "var(--left-space)" }}>loading</p>
            ) : (
                <ProductBody
                    productData={productData}
                    numberOfProducts={numberOfProducts}
                    numberOfPages={numberOfPages}
                ></ProductBody>
            )}
        </>
    );
};
export default Products;

export const productLoader = async ({ request }) => {
    //server url
    const requestUrl = `${process.env.server_url}/api/v1/products`;
    const finalRequestUrl = new URL(requestUrl);

    const url = new URL(request.url);
    const page = url.searchParams.get("page");
    const sort = url.searchParams.get("sort");
    const search = url.searchParams.get("search");
    if (page) {
        finalRequestUrl.searchParams.append("page", page);
    }
    if (sort) {
        finalRequestUrl.searchParams.append("sort", sort);
    }
    if (search) {
        finalRequestUrl.searchParams.append("search", search);
    }

    const response = await fetch(finalRequestUrl.href);

    //when an error gets thrown in a loader react router will simply render the closest error element
    if (!response.ok) {
        // return { isError: true, message: "Could not fetch events" };
        // throw new Response(
        //     JSON.stringify({ message: "Could not fetch events." }),
        //     { status: 500 }
        // );
        throw json(
            {
                message: "Could not fetch products.",
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
