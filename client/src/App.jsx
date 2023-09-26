import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout";
import About from "../src/pages/About";
import Products from "../src/pages/Products";
import Home from "../src/pages/Home";
import { productLoader } from "../src/pages/Products";
import { productDetailLoader } from "../src/pages/ProductDetail";
import { action } from "../src/components/Auth/LoginForm";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Logout from "./components/Auth/Logout";
import { tokenLoader } from "./util/auth";
import { action as logoutAction } from "./components/Auth/Logout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "login",
                element: <Login></Login>,
                action: action,
            },
            {
                path: "logout",
                element: <Logout></Logout>,
                action: logoutAction,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "products",
                children: [
                    {
                        index: true,
                        loader: productLoader,
                        element: <Products />,
                    },
                    {
                        path: ":id",
                        loader: productDetailLoader,
                        element: <ProductDetail />,
                    },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
