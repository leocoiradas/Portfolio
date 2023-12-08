import React from "react";
import profileImg from "/src/assets/profile/profile.png";

function Details() {
  const details = {
    name: "Alan Leonel Coiradas",
    title: "Full Stack Developer",
    message: "Saludos, soy Alan, un apasionado desarrollador Full Stack especializado en el Stack MERN. Actualmente, estoy inmerso en proyectos que no solo ponen a prueba mis capacidades, sino que también generan soluciones innovadoras. Mi compromiso con la excelencia y la pasión por el desarrollo tecnológico son las fuerzas que impulsan mi viaje profesional. Únete a mí en este viaje, donde la curiosidad es la brújula y los desafíos son la chispa que enciende la creatividad. ¡Gracias por explorar mi rincón digital! "
  };

  return (
    <article className="flex flex-col lg:flex-row justify-center items-center lg:w-[75dvw] gap-3 p-4 text-2xl text-white border-2 rounded-md border-purple-400 backdrop-blur-md bg-black/60">
        <article className="flex flex-col justify-center items-center flex-1">
            <article className="w-48 h-48">
                <img src={profileImg} alt={details.name} classname="object-cover w-full h-full" />
            </article>
            <h4 className="text-purple-700">{details.name}</h4>
            <h4 className="text-purple-700">{details.title}</h4>
      </article>
      <article className="flex flex-col gap-4 lg:w-2/3">
        <p className="text-center text-base lg:text-start lg:text-2xl">{details.message}</p>
      </article>
    </article>
  );
}

export default Details;
