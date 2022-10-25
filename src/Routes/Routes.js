import { createBrowserRouter } from "react-router-dom";
import AllCourses from "../Pages/AllCourses/AllCourses";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import DynamicCourses from "../Pages/DynamicCourses/DynamicCourses";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home/Home";
import Main from "../Pages/Layout/Main";
import MainCourse from "../Pages/Layout/MainCourse";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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
                loader: () => fetch('http://localhost:5000/news'),
                element: <MainCourse></MainCourse>,
                children: [
                    {
                        path: '/course',
                        loader: () => fetch('http://localhost:5000/courses'),
                        element: <AllCourses></AllCourses>
                    },
                    {
                        path: 'course/:id',
                        loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
                        element: <DynamicCourses></DynamicCourses>
                    },
                    {
                        path: '/course/details/:id',
                        loader: ({ params }) => fetch(`http://localhost:5000/course-details/${params.id}`),
                        element: <CourseDetails></CourseDetails>
                    },
                    {
                        path: '/course/checkout/:id',
                        loader: ({ params }) => fetch(`http://localhost:5000/course-details/${params.id}`),
                        element: <Checkout></Checkout>
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
        element: <div>Not found</div>
    }
])
