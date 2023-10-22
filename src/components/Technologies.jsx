import React from "react";

function Technologies(){
    const technologies = ["HTML", "CSS", "JavaScript", "TailwindCSS", "React", "Redux-Toolkit", "MongoDB", "Express.js", "Node.js", "GitHub"]
    return(
        <article className="flex flex-wrap gap-3 py-3 w-4/5">
            {technologies.map((element) => (<p className="p-2 bg-blue-400 text-white rounded-md text-center text-md"><b>{element}</b></p>))}
        </article>
    )
}

export default Technologies