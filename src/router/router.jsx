import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element:"" ,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/"
            },
            {},
            {},
            {
                path: "*",
                element: <div className="flex justify-center items-center min-h-[80vh]"><h2 className="text-center text-2xl w-[75vw]">This page is under construction. Please come back later.</h2></div>
            }
        ]
    }
])

export default router