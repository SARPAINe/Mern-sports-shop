import { Outlet } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "./Footer";
const RootLayout = (props) => {
    return (
        <>
            <Header></Header>
            <main>
                {console.log("reloaded")}
                <Outlet></Outlet>
            </main>
            <Footer />
        </>
    );
};

export default RootLayout;
