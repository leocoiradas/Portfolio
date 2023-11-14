import React from "react";
import { Link } from "react-router-dom";

function SocialCard({ socialInfo, color }) {
    return (
        <article className={`w-[70vw] flex flex-wrap gap-2 p-2 border-2 rounded-md border-${color}-600 p-3`}>
            <div className="w-1/3">
                <figure className={`text-${color} text-2xl`}>
                    {socialInfo.icon}
                </figure>
            </div>
            <div className="flex-1">
                <h2 className={`text-${color} text-2xl`}>{socialInfo.website}</h2>
                <p className="text-xl">{socialInfo.message}</p>
                <Link to={socialInfo.to} className={`bg-${color}-500 hover:bg-${color}-700 rounded-md p-3`}>Go</Link>
            </div>
        </article>
    )
}

export default SocialCard