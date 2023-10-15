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
        <section>
            <article>
                <img src={presentation.img} alt={presentation.name}/>
                <p>{presentation.name}</p>
            </article>
            <article>
                <p>{presentation.message}</p>
            </article>
        </section>
    );
}

export default Introduction