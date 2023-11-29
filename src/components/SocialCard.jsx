import React from "react";

function SocialCard({ socialInfo }) {
    return (
        <article className="w-[70vw] flex justify-center items-center flex-wrap gap-2 border-2 rounded-md border-purple-600 backdrop-blur-md bg-black/60 p-3">
            <div className="w-1/5">
                <figure className="flex justify-center items-center text-purple-500 text-5xl">
                    {socialInfo.icon}
                </figure>
            </div>
            <div className="flex flex-col justify-center items-start flex-1 gap-3">
                <h2 className={"font-sans text-purple-500 text-2xl"}>{socialInfo.website}</h2>
                <p className="font-mono text-xl text-white">{socialInfo.message}</p>
                {socialInfo.mail ? (<a href={`mailto:${socialInfo.to}`} target="_blank" className="w-36 inline-flex justify-start items-center bg-cyan-500 hover:bg-blue-700 rounded-md px-6 py-2 gap-2">{socialInfo.icon} {socialInfo.website}</a>)
                :
                <a href={socialInfo.to} target="_blank" className="w-36 inline-flex justify-start items-center bg-cyan-500 hover:bg-blue-700 rounded-md px-6 py-2 gap-2">{socialInfo.icon} {socialInfo.website}</a>}
            </div>
        </article>
    )
}

export default SocialCard