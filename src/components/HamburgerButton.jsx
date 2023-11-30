import React from "react";


function HamburgerButton ({buttonSwitch, openSwitch, children}){
    return(
        <div>
            <button onClick={buttonSwitch} className="flex flex-col w-full lg:hidden">
                <div className={`line w-6 h-1 mb-1 bg-white ${openSwitch ? 'rotate-45' : ''}`}> </div>
                <div className={`line w-6 h-1 mb-1 bg-white ${openSwitch ? 'opacity-0' : ''}`}></div>
                <div className={`line w-6 h-1 mb-1 bg-white ${openSwitch ? '-rotate-45' : ''}`}></div>
            </button>
            <div className="block relative z-10">
                {openSwitch ? children : null}
            </div>
        </div>
        
    )
}

export default HamburgerButton