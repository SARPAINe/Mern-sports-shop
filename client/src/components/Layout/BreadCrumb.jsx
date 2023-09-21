import _ from "lodash";
import { Link, useLocation } from "react-router-dom";
import classes from "./BreadCrumb.module.css";
const BreadCrumb = ({ crumbs }) => {
    const location = useLocation();
    let currentLink = "";
    let tempCrumbs = [];
    if (crumbs) {
        let index = -1;
        tempCrumbs = location.pathname
            .split("/")
            .filter((crumb) => crumb !== "")
            .map((crumb) => {
                currentLink += `/${crumb}`;
                index++;
                return (
                    <div className={classes.crumb} key={crumb}>
                        <Link to={currentLink}>{crumbs[index]}</Link>
                    </div>
                );
            });
    } else {
        tempCrumbs = location.pathname
            .split("/")
            .filter((crumb) => crumb !== "")
            .map((crumb) => {
                currentLink += `/${crumb}`;
                return (
                    <div className={classes.crumb} key={crumb}>
                        <Link to={currentLink}>{_.capitalize(crumb)}</Link>
                    </div>
                );
            });
    }

    const homeCrumb = (
        <div className={classes.crumb} key={"home"}>
            <Link to={"/"}>Home</Link>
        </div>
    );
    const finalCrumbs = [homeCrumb, ...tempCrumbs];

    return (
        <div className={classes.layout}>
            <div className={classes.breadcrumb}>{finalCrumbs}</div>
        </div>
    );
};

export default BreadCrumb;
