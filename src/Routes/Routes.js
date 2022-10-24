import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home/Home";
import Main from "../Pages/Layout/Main";

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
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            }
        ]
    }
])
