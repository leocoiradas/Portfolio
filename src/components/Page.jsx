import React from "react";

function Page({children, info}){
    return(
        <main className="flex flex-col justify-center items-center min-h-[90dvh] w-full gap-4 p-3">
            <article className="lg:w-[75vw] flex flex-col justify-center items-center p-5 lg:text-xl text-center text-white gap-5">
                <h1 className="text-3xl text-purple-400 font-sans">{info.title}</h1>
                <p className="font-mono">{info.comment}</p>
                <p className="text-2xl text-yellow-500">{info.icon}</p>
            </article>
            {children}
        </main>
    )
}

export default Page