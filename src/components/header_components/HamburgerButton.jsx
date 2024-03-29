import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { useTranslation } from "react-i18next";

function HamburgerButton({ buttonSwitch, openSwitch, children }) {
    const { t } = useTranslation("global")
    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-end items-center">
                <button aria-label={openSwitch ? t("navbar-button.name-close") : t("navbar-button.name-open")} onClick={buttonSwitch} className="flex flex-col justify-center items-center  p-4 rounded-md border-2 border-transparent transition-all duration-300 lg:hidden">
                    {openSwitch ?
                        <VscChromeClose className="mb-1 text-white text-5xl rounded-md border-2 border-transparent font-bold ease-in-out duration-300" />
                    :
                        <>
                            <div className={`line w-8 h-1 mb-1 bg-white`}> </div>
                            <div className={`line w-8 h-1 mb-1 bg-white`}></div>
                            <div className={`line w-8 h-1 mb-1 bg-white`}></div>
                        </>
                    }
                </button>
            </div>

            <div className="block relative z-10">
                {openSwitch ? children : null}
            </div>
        </div>

    )
}

export default HamburgerButton