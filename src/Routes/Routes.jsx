import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Home from "../Pages/Home/Home/Home";
export const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register/>
            }
        ]
        
    }
])