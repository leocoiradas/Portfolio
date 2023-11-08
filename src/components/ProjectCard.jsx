import React from "react";

function ProjectCard({project}) {
    return (
            <div className="max-w-[75vw] md:max-w-[38rem] rounded overflow-hidden shadow-lg bg-black ">
                <div className="h-[10rem] md:h-[20rem] w-full">
                    <img className="object-fill w-full h-full" src={project.images[0]} alt={project.name} />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-white">{project.name}</div>
                    <p className="text-white text-base">
                        {project.shortDesc}
                    </p>
                </div>
            </div>
    )
}

export default ProjectCard;