import React from "react";

function SocialCard({ socialInfo }) {
    return (
        <article className={`w-[70vw] flex flex-wrap gap-2 p-2 border-2 rounded-md border-${socialInfo.color}-600 p-3`}>
            <div className="w-1/3">
                <figure className={`text-${socialInfo.color} text-2xl`}>
                    {socialInfo.icon}
                </figure>
            </div>
            <div className="flex-1">
                <h2 className={`text-${socialInfo.color} text-2xl`}>{socialInfo.website}</h2>
                <p className="text-xl">{socialInfo.message}</p>
                <a href={socialInfo.to} className={`bg-${socialInfo.color}-500 hover:bg-${socialInfo.color}-700 rounded-md p-3`}>Go</a>
            </div>
        </article>
    )
}

export default SocialCard