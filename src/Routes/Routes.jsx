import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AdmissionForCollege from "../Pages/Admission/AdmissionForCollege/AdmissionForCollege";
import AdmissionPerCollege from "../Pages/Admission/AdmissionPerCollege/AdmissionPerCollege";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Colleges from "../Pages/Colleges/Colleges";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CollegeCardsDetails from "../Pages/Home/CollegeCards/CollegeCardsDetails";
import Home from "../Pages/Home/Home/Home";
import MyCollege from "../Pages/MyCollege/MyCollege";
import ReviewandRatings from "../Pages/MyCollege/ReviewandRatings";
import UpdateUserInfo from "../Pages/Shared/Navbar/UpdateUserInfo";
import UserInfo from "../Pages/Shared/Navbar/UserInfo";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                // loader: ({params}) => fetch(`https://college-bookings-server.vercel.app/users/${params.email}`) 
            },
            {
                path: "updateInfo/:id",
                element: <UpdateUserInfo></UpdateUserInfo>,
                loader: ({params}) => fetch(`https://college-bookings-server.vercel.app/user/${params.id}`)
            },
            {
                path: "collegeCardDetails/:id",
                element: <PrivateRoute><CollegeCardsDetails></CollegeCardsDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://college-bookings-server.vercel.app/allCollege/${params.id}`)
            },
            {
                path: "colleges",
                element: <Colleges></Colleges>
            },
            {
                path: "myCollege",
                element: <MyCollege></MyCollege>
            },
            {
                path: "admissionColleges",
                element: <AdmissionForCollege></AdmissionForCollege>
            },
            {
                path: "admissionPortal/:id",
                element: <AdmissionPerCollege></AdmissionPerCollege>,
                loader: ({params}) => fetch(`https://college-bookings-server.vercel.app/allCollege/${params.id}`)
            },
            {
                path: "reviewAndRatings/:id",
                element: <ReviewandRatings></ReviewandRatings>,
                loader: ({params}) => fetch(`https://college-bookings-server.vercel.app/allCollege/${params.id}`)
            }
        ]
        
    }
])