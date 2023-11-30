import React from "react";
import NavbarFunction from "../components/NavbarFunction";

function Header(){
    return(
        <header className="flex justify-around w-full min-h-[10dvh] p-3">
            <div className=" w-1/2">
                <h3 className="text-white">Portfolio</h3>
            </div>
            <NavbarFunction />
        </header>
    )
}

export default Header