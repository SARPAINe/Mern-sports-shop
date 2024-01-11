import classes from "./ActionButton.module.css";
const ActionButton = (props) => {
    const style = props?.style || {};
    return (
        <button
            style={style}
            onClick={props.clickHandler}
            className={classes.action}
        >
            {props.name}
        </button>
    );
};
export default ActionButton;
