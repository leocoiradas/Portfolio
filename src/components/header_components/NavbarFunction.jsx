import React from "react";
import Navbar from "./Navbar";
import HamburgerButton from "./HamburgerButton";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

function NavbarFunction(){
    const [open, setOpen] = useState(false)
    const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" })
    const handleNavbar = () => {
        setOpen(!open)
    }
  useEffect(() => {
    if (isDesktop) {
      setOpen(false);
    }
  }, [isDesktop]);
    return(
        <div className={`${open ? " flex justify-end fixed  inset-0 backdrop-blur-md bg-black/30 bg-black bg-opacity-50 z-50" : null}`}>
            <div className="lg:hidden flex justify-end h-full">
                <HamburgerButton buttonSwitch={handleNavbar} openSwitch={open}>
                    <Navbar navFunction={handleNavbar} />
                </HamburgerButton>
            </div>
            <div className="hidden lg:block">
                <Navbar />
                
            </div>
        </div>
    )
}

export default NavbarFunction