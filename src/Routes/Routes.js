import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
import Main from "../Pages/Layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])
