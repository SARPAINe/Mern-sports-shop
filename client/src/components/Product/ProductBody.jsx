import { useSearchParams } from "react-router-dom";
import BreadCrumb from "../Layout/BreadCrumb";
import Pagination from "./Pagination";
import classes from "./ProductBody.module.css";
import _ from "lodash";
import { useState } from "react";
import ActionButton from "../Button/ActionButton";

const ProductBody = ({ productData, numberOfProducts, numberOfPages }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const sortOptionValue = searchParams.get("sort") || "lowest";
    const searchTermValue = searchParams.get("search");
    const categoryTermValue = searchParams.get("category");
    const [searchTerm, setSearchTerm] = useState(searchTermValue || "");
    const [selectedCategory, setSelectedCategory] = useState(
        categoryTermValue || "all"
    );

    const onChangeHandlerSort = (event) => {
        setSearchParams((prevSearchParams) => ({
            ...prevSearchParams,
            sort: event.target.value,
        }));
    };

    const onSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
        // setSearchParams({ search: event.target.value });
    };

    const onCategoryInputChange = (category) => {
        if (category !== "all") {
            setSearchParams({ category });
        } else {
            setSearchParams();
        }
    };

    const searchHandler = () => {
        setSearchParams({ search: searchTerm });
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
                    <div className={classes.search}>
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={onSearchInputChange}
                        ></input>
                        <ActionButton
                            name="SEARCH"
                            clickHandler={searchHandler}
                        ></ActionButton>
                    </div>
                    <div className={classes.category}>
                        <div className={classes.category_heading}>Category</div>
                        <ul className={classes.category_list}>
                            <li
                                className={
                                    selectedCategory === "all"
                                        ? classes["selected"]
                                        : ""
                                }
                                onClick={() => {
                                    onCategoryInputChange("all");
                                }}
                            >
                                All
                            </li>
                            <li
                                className={
                                    selectedCategory === "football"
                                        ? classes["selected"]
                                        : ""
                                }
                                onClick={() => {
                                    onCategoryInputChange("football");
                                }}
                            >
                                Football
                            </li>
                            <li
                                className={
                                    selectedCategory === "jersey"
                                        ? classes["selected"]
                                        : ""
                                }
                                onClick={() => {
                                    onCategoryInputChange("jersey");
                                }}
                            >
                                Jersey
                            </li>
                            <li
                                className={
                                    selectedCategory === "boots"
                                        ? classes["selected"]
                                        : ""
                                }
                                onClick={() => {
                                    onCategoryInputChange("boots");
                                }}
                            >
                                Boots
                            </li>
                        </ul>
                    </div>
                </section>
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
