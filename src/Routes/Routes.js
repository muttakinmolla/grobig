import { createBrowserRouter } from "react-router-dom";
import AllCourses from "../Pages/AllCourses/AllCourses";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import DynamicCourses from "../Pages/DynamicCourses/DynamicCourses";
import Error404 from "../Pages/Error404/Error404";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home/Home";
import Main from "../Pages/Layout/Main";
import MainCourse from "../Pages/Layout/MainCourse";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/course',
                loader: () => fetch('https://grow-big-server.vercel.app/news'),
                element: <MainCourse></MainCourse>,
                children: [
                    {
                        path: '/course',
                        loader: () => fetch('https://grow-big-server.vercel.app/courses'),
                        element: <AllCourses></AllCourses>
                    },
                    {
                        path: 'course/:id',
                        loader: ({ params }) => fetch(`https://grow-big-server.vercel.app/course/${params.id}`),
                        element: <DynamicCourses></DynamicCourses>
                    },
                    {
                        path: '/course/details/:id',
                        loader: ({ params }) => fetch(`https://grow-big-server.vercel.app/course-details/${params.id}`),
                        element: <CourseDetails></CourseDetails>
                    },
                    {
                        path: '/course/checkout/:id',
                        loader: ({ params }) => fetch(`https://grow-big-server.vercel.app/course-details/${params.id}`),
                        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
                    }
                ]
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <Error404></Error404>
    }
])
