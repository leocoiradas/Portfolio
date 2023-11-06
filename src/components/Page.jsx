import React from "react";

function Page({children}, page){
    return(
        <section className="flex flex-col justify-center items-center h-[90vh] gap-8 p-3">
            <article className="flex flex-col justify-center items-center p-5">
                <h1>{page.title}</h1>
                <p>{page.comment}</p>
                <p>{page.icon}</p>
            </article>
            {children}
        </section>
    )
}

export default Page