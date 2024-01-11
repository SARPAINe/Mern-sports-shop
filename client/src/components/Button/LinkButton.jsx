import { Link } from "react-router-dom";
import classes from "./LinkButton.module.css";
const LinkButton = (props) => {
    const style = props?.style || {};
    return (
        <button style={style} className={classes.link}>
            <Link to={props.link}>{props.name}</Link>
        </button>
    );
};
export default LinkButton;
