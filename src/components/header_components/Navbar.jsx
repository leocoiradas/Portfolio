import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation("global")
  const links = [
    {
      name: "header.navbar.home",
      path: "/",
    },
    {
        name: "header.navbar.about",
        path: "/about"
    },
    {
      name: "header.navbar.projects",
      path: "/projects"
    },
    {
      name: "header.navbar.certifications",
      path: "/certifications"
    },
    {
       name: "header.navbar.contact",
       path: "/contact" 
    },
    
  ];
  
  
  return(  
      <ul className="flex flex-col w-[60dvw] lg:flex-row lg:static lg:w-auto lg:bg-none justify-center lg:items-center items-end gap-2">
        {links.map((link, i) => (
          <Link key={i} to={link.path} className="px-4 py-2 text-white text-center  text-2xl rounded-md border-2 border-transparent hover:border-purple-600 hover:text-purple-600 ease-in duration-300 lg:text-base">
            {t(link.name)}
          </Link>
            ))}
      </ul> 
  );
}

export default Navbar