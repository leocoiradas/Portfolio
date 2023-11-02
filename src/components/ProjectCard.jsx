import React from "react";

function ProjectCard({project}) {
    return (
        <article>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src={project} alt={project.title} />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{project.title}</div>
                    <p class="text-gray-700 text-base">
                        {project.shortDesc}
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    {project.map((element) => (<p class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{element}</p>))}
                </div>
            </div>
        </article>
    )
}

export default ProjectCard;