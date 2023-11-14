import React from "react";
import { Link } from "react-router-dom";

function SocialCard({ socialMedia }) {
    return (
        <article className="flex flex-wrap gap-2 p-2">
            <div className="w-1/3">
                <figure>
                    {socialMedia.icon}
                </figure>
            </div>
            <div className="flex-1">
                <h2>{socialMedia.website}</h2>
                <p>{socialMedia.message}</p>
                <Link to={socialMedia.to}>Go</Link>
            </div>
        </article>
    )
}

export default SocialCard