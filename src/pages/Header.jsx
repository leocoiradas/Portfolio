import React from "react";
import Navbar from "../components/Navbar";

function Header(){
    return(
        <header className="flex justify-around w-full min-h-[10vh] p-3">
            <div className=" w-2/3">
                <h3 className="text-white">Portfolio</h3>
            </div>
            <Navbar />
        </header>
    )
}

export default Header