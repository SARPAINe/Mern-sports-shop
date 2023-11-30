import { useRouteLoaderData } from "react-router-dom";
import LoginForm from "../components/Auth/LoginForm";
import Home from "./Home";
import BreadCrumb from "../components/Layout/BreadCrumb";

const Login = () => {
    const loaderData = useRouteLoaderData("root");
    if (loaderData && loaderData !== "logged out") {
        return <Home></Home>;
    } else return <LoginForm></LoginForm>;
};
export default Login;
