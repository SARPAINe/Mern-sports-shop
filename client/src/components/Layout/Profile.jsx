import Cart from "../Cart/Cart";
import User from "./User";
import classes from "./Profile.module.css";
const Profile = () => {
    return (
        <div className={classes.profile}>
            <Cart></Cart>
            <User></User>
        </div>
    );
};
export default Profile;
