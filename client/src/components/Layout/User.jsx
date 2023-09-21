import classes from "./User.module.css";
import { Link } from "react-router-dom";
const User = () => {
    return (
        <div className={classes.user}>
            <Link to="/login">Login</Link>
        </div>
    );
};
export default User;
