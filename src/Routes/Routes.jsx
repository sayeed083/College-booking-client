import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Home from "../Pages/Home/Home/Home";
import UpdateUserInfo from "../Pages/Shared/Navbar/UpdateUserInfo";
import UserInfo from "../Pages/Shared/Navbar/UserInfo";
import PrivateRoute from "./PrivateRoute";
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
            },
            {
                path: "userInfo/:email",
                element:<PrivateRoute><UserInfo></UserInfo></PrivateRoute>, 
                // loader: ({params}) => fetch(`http://localhost:5000/users/${params.email}`) 
            },
            {
                path: "updateInfo/:id",
                element: <UpdateUserInfo></UpdateUserInfo>,
                loader: ({params}) => fetch(`http://localhost:5000/user/${params.id}`)
            }
        ]
        
    }
])