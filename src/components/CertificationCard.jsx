import React from "react";

function CertificationCard({ certification }) {
    return (
        <article className="flex flex-col justify-center items-center w-[24rem] border-2 rounded-md bg-purple-600 hover:scale-[110%] p-3 gap-3">
            <div className="max-h-[14rem]">
                <img src={certification.image} className="w-full h-full rounded-md"/>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 p-3">
                <h3 className="text-2xl">{certification.title}</h3>
                <p className="text-xl">{certification.institution}</p>
            </div>
            <div className="divide-y"></div>
            <div className="flex flex-wrap justify-center items-center text-3xl gap-2">
                {certification.skills}
            </div>
        </article>
    )
}
export default CertificationCard