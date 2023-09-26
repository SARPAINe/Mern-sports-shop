import Cart from "../Cart/Cart";
import User from "./User";
import classes from "./Profile.module.css";
const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <Cart></Cart>
            <User user={props.user}></User>
        </div>
    );
};
export default Profile;
