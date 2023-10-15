import React from "react";
import image from "../assets/profile/profile.png"

function Introduction() {
    const presentation = {
        name: "Alan Coiradas",
        message:
            "Soy un apasionado constructor de soluciones digitales. Mi conjunto de habilidades incluye el Stack MERN, HTML, CSS, JavaScript, Redux Toolkit y Tailwind CSS. Estoy comprometido con la mejora constante y emocionado por la posibilidad de contribuir en el mundo de la tecnología. Busco oportunidades para aplicar y expandir mis conocimientos en un entorno de trabajo desafiante y en constante evolución.",
        img: image
        };
    return (
        <section className="flex justify-center items-center p-4 w-[75vw] gap-4 border-2 rounded-md border-red-500">
            <article className="flex flex-col justify-center items-center gap-4 flex-1">
                <div className="w-48 h-48">
                 <img src={presentation.img} className="object-cover w-full h-full" alt={presentation.name}/>
                </div>
                <p className="text-center text-xl">{presentation.name}</p>
            </article>
            <article className="w-2/3">
                <p className="text-2xl">{presentation.message}</p>
            </article>
        </section>
    );
}

export default Introduction