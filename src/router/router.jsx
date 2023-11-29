import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectDetails";
import Contact from "../pages/Contact";
import Certifications from "../pages/Certifications";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Layout /> ,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/projects/:id",
                element: <ProjectDetails />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/certifications",
                element: <Certifications />
            },
            {
                path: "*",
                element: <div className="flex justify-center items-center min-h-[90vh]"><h2 className="text-center text-yellow-400 text-2xl w-[75vw]">This page is under construction. Please come back later.</h2></div>
            }
        ]
    }
])

export default router