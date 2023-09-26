import PageContent from "../components/Error/PageContent";
import { useRouteError } from "react-router-dom";
import Header from "../components/Layout/Header";
import RootLayout from "../components/Layout/RootLayout";
// import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    let title, message;
    if (error.status === 404) {
        title = "Not found!";
        message = "Could not find resource or page";
    } else if (error.status === 500 || error.status) {
        console.log("error status found");
        title = "An error occured!";
        // message = JSON.parse(error.data).message;
        console.log(error.data);
        error.data?.message
            ? (message = error.data.message)
            : (message = "Something went wrong!");
        console.log(message);
        // message = error.data.message;
    } else {
        title = "Internal Server Error";
        message = "Please try again later";
    }
    // console.log(JSON.parse(error.data).message);
    return (
        <>
            {/* <RootLayout> */}
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
            {/* </RootLayout> */}
        </>
    );
};

export default ErrorPage;
