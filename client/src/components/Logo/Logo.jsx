import classes from "./Logo.module.css";
const Logo = (props) => {
    return (
        <div className={classes.logo}>
            <span className={classes[`first-name`]}>Sports</span>
            <span className={classes[`last-name`]}>Shop</span>
        </div>
    );
};
export default Logo;
