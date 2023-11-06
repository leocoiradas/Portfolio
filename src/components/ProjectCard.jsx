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
            </div>
        </article>
    )
}

export default ProjectCard;