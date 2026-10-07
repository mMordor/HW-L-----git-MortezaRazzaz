import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";


export  const routs = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/products/:id",
                element: <Products/>
            }
            ,
            {
                path:"/Cart",
                element: <Cart/>
            }
        ]
    }
])