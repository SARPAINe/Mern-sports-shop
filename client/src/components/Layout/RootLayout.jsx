import { Outlet } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "./Footer";
const RootLayout = (props) => {
    return (
        <>
            <Header></Header>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer />
        </>
    );
};

export default RootLayout;
