import { useSearchParams } from "react-router-dom";
import BreadCrumb from "../Layout/BreadCrumb";
import Pagination from "./Pagination";
import classes from "./ProductBody.module.css";
import _ from "lodash";
import { useState } from "react";
import ActionButton from "../Button/ActionButton";

const ProductBody = ({ productData, numberOfProducts, numberOfPages }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.has("category"));
    const sortOptionValue = searchParams.get("sort") || "lowest";
    const searchParamValue = searchParams.get("search");
    const categoryParamValue = searchParams.get("category") || "all";
    const companyParamValue = searchParams.get("company") || "all";
    console.log(`companyParamValue: ${companyParamValue}`);
    const [searchTerm, setSearchTerm] = useState(searchParamValue || "");
    const [selectedCategory, setSelectedCategory] = useState(
        categoryParamValue || "all"
    );

    const clearFilter = () => {
        setSearchParams();
    };

    const onChangeHandlerSort = (event) => {
        // setSearchParams((prevSearchParams) => {
        //     const searchParams = {};
        //     prevSearchParams.forEach((value, key) => {
        //         searchParams[key] = value;
        //     });
        //     searchParams["sort"] = event.target.value;
        //     return searchParams;
        // });
        setSearchParams((prevSearchParams) => ({
            ...Object.fromEntries(prevSearchParams),
            sort: event.target.value,
        }));
    };

    const onSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
        // setSearchParams({ search: event.target.value });
    };

    const onCategoryInputChange = (category) => {
        // if (category !== "all") {
        //     setSearchParams((prevSearchParams) => {
        //         const searchParams = {};
        //         prevSearchParams.forEach((value, key) => {
        //             searchParams[key] = value;
        //         });
        //         searchParams["category"] = category;
        //         return searchParams;
        //     });
        // } else {
        //     setSearchParams((prevSearchParams) => {
        //         const searchParams = {};
        //         prevSearchParams.forEach((value, key) => {
        //             if (key !== "category") searchParams[key] = value;
        //         });
        //         return searchParams;
        //     });
        // }
        setSearchParams((prevSearchParams) => {
            const searchParams = { ...Object.fromEntries(prevSearchParams) };

            if (category !== "all") {
                searchParams["category"] = category;
            } else {
                delete searchParams["category"];
            }

            return searchParams;
        });
    };

    const onCompanyInputChange = (event) => {
        setSearchParams((prevSearchParams) => {
            const searchParams = { ...Object.fromEntries(prevSearchParams) };
            if (company !== "all") {
                searchParams["company"] = event.target.value;
            } else {
                delete searchParams["company"];
            }
            return searchParams;
        });
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
                    <div className={classes.company}>
                        <div className={classes.company_heading}>Company</div>
                        <select
                            name="company"
                            id="company"
                            className={classes[`company_input`]}
                            onChange={onCompanyInputChange}
                            value={companyParamValue}
                        >
                            <option value="all">All</option>
                            <option value="adidas">Adidas</option>
                            <option value="puma">Puma</option>
                            <option value="nike">Nike</option>
                        </select>
                    </div>
                    <div className={classes.clear}>
                        <ActionButton
                            style={{
                                backgroundColor: "red",
                                color: "white",
                                padding: "5px",
                            }}
                            clickHandler={clearFilter}
                            name="Clear Filters"
                        ></ActionButton>
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
