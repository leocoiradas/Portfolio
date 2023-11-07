import React from "react";

function Page({children}, info){
    return(
        <section className="flex flex-col justify-center items-center min-h-[90vh] gap-8 p-3">
            <article className="flex flex-col justify-center items-center p-5">
                <h1>{info.title}</h1>
                <p>{info.comment}</p>
                <p>{info.icon}</p>
            </article>
            {children}
        </section>
    )
}

export default Page