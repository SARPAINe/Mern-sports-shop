import { useSearchParams } from "react-router-dom";
import BreadCrumb from "../Layout/BreadCrumb";
import Pagination from "./Pagination";
import classes from "./ProductBody.module.css";

const ProductBody = ({ productData, numberOfProducts, numberOfPages }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const sortOptionValue = searchParams.get("sort");

    const onChangeHandlerSort = (event) => {
        setSearchParams((prevSearchParams) => ({
            ...prevSearchParams,
            sort: event.target.value,
        }));
    };

    const productInfoContent = (
        <div className={classes.product_info}>
            <p>{`${numberOfProducts} items found`}</p>
            <hr />
            <form>
                <label htmlFor="sort">Sort By </label>
                <select
                    name="sort"
                    id="sort"
                    className={classes[`sort-input`]}
                    onChange={onChangeHandlerSort}
                    value={sortOptionValue}
                >
                    <option value="lowest">price (lowest)</option>
                    <option value="highest">price (highest)</option>
                    <option value="a-z">name (a - z)</option>
                    <option value="z-a">name (z - a)</option>
                </select>
            </form>
        </div>
    );
    let linkContents = ["PREV"];
    for (let i = 0; i < numberOfPages; i++) {
        linkContents.push(String(i + 1));
    }
    linkContents.push("NEXT");
    const paginationLinks = (
        <div className={classes.pagination_container}>
            <Pagination
                linkContents={linkContents}
                numberOfPages={numberOfPages}
            ></Pagination>
        </div>
    );
    const paginationInfo = <div></div>;
    return (
        <>
            <BreadCrumb></BreadCrumb>
            <div className={classes.product_body}>
                <section className={classes.product_filter}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sequi non pariatur quo repudiandae architecto? Minima nulla
                    maxime ea porro nihil, perspiciatis nostrum distinctio est
                    id aspernatur temporibus dignissimos vitae adipisci? Lorem
                    ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                    non pariatur quo repudiandae architecto? Minima nulla maxime
                    ea porro nihil, perspiciatis nostrum distinctio est id
                    aspernatur temporibus dignissimos vitae adipisci? Lorem
                    ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                    non pariatur quo repudiandae architecto? Minima nulla maxime
                    ea porro nihil, perspiciatis nostrum distinctio est id
                    aspernatur temporibus dignissimos vitae adipisci?
                </section>
                {/* <section className={classes.product_data}>
                        {productData}
                    </section> */}
                <section className={classes.products}>
                    {productInfoContent}
                    <div className={classes.product_data}>{productData}</div>
                    {paginationLinks}
                </section>
            </div>
        </>
    );
};

export default ProductBody;
