import React from "react";

function Page({children, info}){
    return(
        <section className="flex flex-col justify-center items-center min-h-[90dvh] w-full gap-4 p-3">
            <article className="w-[75vw] flex flex-col justify-center items-center p-5 text-xl text-center text-white gap-5">
                <h1 className="text-3xl">{info.title}</h1>
                <p>{info.comment}</p>
                <p className="text-2xl">{info.icon}</p>
            </article>
            {children}
        </section>
    )
}

export default Page