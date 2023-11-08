import React from "react";

function ProjectCard({project}) {
    return (
        <article>
            <div className="max-w-[30rem] rounded overflow-hidden shadow-lg bg-black ">
                <div className="w-full">
                    <img className="w-full h-full object-cover" src={project.images[0]} alt={project.name} />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-white">{project.name}</div>
                    <p className="text-white text-base">
                        {project.shortDesc}
                    </p>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard;