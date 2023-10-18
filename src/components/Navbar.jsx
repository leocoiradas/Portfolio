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
      path: "proyects"
    },
    {
       name: "Contact",
       path: "/contact" 
    },
    
  ];
  return(
    <ul className="flex justify-center items-center gap-4">
      {links.map((link) => (<a className="px-4 py-2 text-white text-center rounded-md border-2 border-white" href={link.path}>{link.name}</a>))}
    </ul>
  );
}

export default Navbar