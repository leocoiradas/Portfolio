import React from "react";
import Navbar from "./Navbar";
import HamburgerButton from "./HamburgerButton";
import { useState } from "react";

function NavbarFunction(){
    const [open, setOpen] = useState(false)
    const handleNavbar = () => {
        setOpen(!open)
        console.log("This works!!")
    }
    return(
        <div className={`${open ? " flex justify-end fixed  inset-0 backdrop-blur-md bg-black/30 bg-black bg-opacity-50 z-50" : null}`}>
            <div className="lg:hidden flex justify-end h-full">
                <HamburgerButton buttonSwitch={handleNavbar} openSwitch={open}>
                    <Navbar />
                </HamburgerButton>
            </div>
            <div className="hidden lg:block">
                <Navbar />
                
            </div>
        </div>
    )
}

export default NavbarFunction