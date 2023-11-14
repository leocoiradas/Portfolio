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
      name: "Studies",
      path: "*"
    },
    {
       name: "Contact",
       path: "/contact" 
    },
    
  ];
  return(
    <ul className="flex justify-center items-center gap-2">
      {links.map((link, i) => (<Link key={i} to={link.path} className="px-4 py-2 text-white text-center hover:rounded-md hover:border-2 hover:border-yellow-400 hover:text-yellow-400">{link.name}</Link>))}
    </ul>
  );
}

export default Navbar