import classes from "./User.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import _ from "lodash";
import UsernameContext from "./UsernameContext";
const User = () => {
    const { userName, setUserName } = useContext(UsernameContext);
    const [userId, setUserId] = useState();
    useEffect(() => {
        const showMe = async () => {
            let res = await axios.get(
                "http://localhost:5000/api/v1/users/showMe",
                {
                    withCredentials: true,
                }
            );
            setUserName(res.data.user.name);
            setUserId(res.data.user.userId);
        };
        showMe();
        console.log("Entered");
    }, [userName]);
    const userContent = userName ? (
        <div className={classes.user_container}>
            <div className={classes.profile}>
                <Link to={`user/profile/${userId}`}>
                    {_.capitalize(userName)}
                </Link>
            </div>
            <div>
                <Link to="/logout">Logout</Link>
            </div>
        </div>
    ) : (
        <div className={classes.user_container}>
            <Link to="/login">Login</Link>
        </div>
    );
    return userContent;
};
export default User;
