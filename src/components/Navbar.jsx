import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
        name: "About me",
        path: "/about"
    },
    {
      name: "Projects",
      path: "/projects"
    },
    {
      name: "Certifications",
      path: "/certifications"
    },
    {
       name: "Contact",
       path: "/contact" 
    },
    
  ];
  
  
  return(  
      <ul className="flex flex-col w-[60dvw] lg:flex-row lg:static lg:w-auto lg:bg-none justify-center items-center gap-2">
        {links.map((link, i) => (<Link key={i} to={link.path} className="px-4 py-2 text-white text-center rounded-md border-2 border-transparent hover:border-purple-600 hover:text-purple-600 ease-in duration-300">{link.name}</Link>))}
      </ul> 
  );
}

export default Navbar