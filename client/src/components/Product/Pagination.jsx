import { Link, useSearchParams } from "react-router-dom";
import classes from "./Pagination.module.css";
const Pagination = ({ linkContents, numberOfPages }) => {
    console.log("entered");
    const [searchParams, setSearchParams] = useSearchParams();
    const linkValues = [...linkContents];
    let page = searchParams.get("page");
    const sort = searchParams.get("sort");
    console.log(sort);
    const category = searchParams.get("category");
    let queryParams;
    if (sort || page) {
        queryParams = "?";
    }
    let queryArray = [];
    if (sort) {
        queryArray.push(`sort=${sort}`);
    }
    if (category) {
        queryArray.push(`category=${category}`);
    }
    queryParams += queryArray.join("&");
    console.log(`query params: ${queryParams}`);
    if (!page || page === "1") {
        page = String(Number(page) + 1);
        linkValues[0] = null;
        linkValues[numberOfPages + 1] = String(Number(page) + 1);
    } else if (Number(page) === numberOfPages) {
        linkValues[0] = String(Number(page) - 1);
        linkValues[numberOfPages + 1] = null;
    } else if (Number(page) > 1 && Number(page) < numberOfPages) {
        linkValues[0] = String(Number(page) - 1);
        linkValues[numberOfPages + 1] = String(Number(page) + 1);
    }
    const paginationContent = linkContents.map((link, index) => (
        <button
            className={`${classes.pagination} ${
                linkValues[index] == null ? classes["button-disabled"] : ""
            }`}
            disabled={linkValues[index] == null}
        >
            <Link
                key={index}
                className={
                    linkValues[index] == null ? classes[`disabled-link`] : ""
                }
                to={
                    queryParams !== "undefined"
                        ? `${queryParams}&page=${linkValues[index]}`
                        : `?page=${linkValues[index]}`
                }
            >
                {link}
            </Link>
        </button>
    ));
    return paginationContent;
};
export default Pagination;
