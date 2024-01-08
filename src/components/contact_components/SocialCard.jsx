import React from "react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
<HiArrowTopRightOnSquare />

function SocialCard({ socialInfo }) {
    return (
        <article className="w-[80dvw] lg:w-[70dvw] flex flex-col lg:flex-row justify-center items-center flex-wrap gap-4 lg:gap-2 border-2 rounded-md border-purple-600 backdrop-blur-md bg-black/60 p-3">
            <div className="lg:w-1/5">
                <figure className="flex justify-center items-center text-purple-500 text-5xl">
                    {socialInfo.icon}
                </figure>
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-start flex-1 gap-3">
                {socialInfo.mail ? (<a href={`mailto:${socialInfo.to}`} target="_blank" className="flex items-center font-sans hover:text-cyan-500 text-amber-300 text-2xl gap-2">{socialInfo.website} <HiArrowTopRightOnSquare /></a>)
                : 
                <a href={socialInfo.to} target="_blank" className="flex items-center font-sans hover:text-cyan-500 text-amber-300 text-2xl gap-2">{socialInfo.website} <HiArrowTopRightOnSquare /></a>}
                <p className="font-mono text-xl text-white">{socialInfo.message}</p>
            </div>
        </article>
    )
}

export default SocialCard