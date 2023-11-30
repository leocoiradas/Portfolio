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
        <section className="flex justify-center items-center p-4 w-[75vw] gap-4 border-2 rounded-md border-purple-500 min-h-[50vh] backdrop-blur-md bg-black/60">
            <article className="flex flex-col justify-center items-center w-full gap-4">
                <p className="lg:text-2xl text-center text-white">{presentation.message}</p>
            </article>
        </section>
    );
}

export default Introduction