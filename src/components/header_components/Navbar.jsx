import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "./LanguageSwitch";
import { useLocation } from "react-router-dom";

function Navbar({navFunction}) {
  const { t } = useTranslation("global")
  const location = useLocation()
  const pathName = location.pathname
  
  const links = [
    {
      name: "header.navbar.home",
      path: "/"
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
      <ul className="flex flex-col w-[60dvw] lg:flex-row lg:static lg:w-auto lg:bg-none justify-center lg:items-center items-end gap-5 md:gap-2">
        {links.map((link, i) => (
          <li key={i}><Link to={link.path} onClick={ navFunction }  className={`px-4 py-2 text-center text-2xl rounded-md border-2 border-transparent ease-in duration-300 lg:text-base ${link.path == pathName ? "bg-amber-400 text-black font-medium cursor-not-allowed" : "text-white hover:border-purple-600 hover:text-purple-600"}`}>
            {t(link.name)}
          </Link></li>
            ))}
          <li><LanguageSwitch /></li>
      </ul> 
  );
}

export default Navbar