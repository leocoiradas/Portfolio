import React from "react";
import NavbarFunction from "../components/header_components/NavbarFunction";

function Header(){
    return(
        <header className="flex justify-between items-center w-full min-h-[10dvh] p-3 sticky top-0 z-50 bg-black">
            <div className="p-3">
                <h1 className="text-white">Portfolio</h1>
            </div>
            <NavbarFunction />
        </header>
    )
}

export default Header