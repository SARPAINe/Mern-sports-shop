import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout";
import About from "../src/pages/About";
import Products from "../src/pages/Products";
import Home from "../src/pages/Home";
import { productLoader } from "../src/pages/Products";
import { productDetailLoader } from "../src/pages/ProductDetail";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "login",
                element: <Login></Login>,
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
