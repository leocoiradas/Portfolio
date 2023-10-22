import React from "react";
import profileImg from "../assets/profile/profile.png";
import Technologies from "./Technologies";

function Details() {
  const details = {
    name: "Alan Leonel Coiradas",
    title: "Full Stack Developer",
    birthDate: "14/02/2000",
    country: "Argentina",
    city: "Campana",
    nationality: "argentino",
  };

  return (
    <article className="flex justify-center items-center w-[75vw] gap-3 p-4 text-2xl text-yellow-500 border-2 rounded-md border-cyan-400 ">
        <article className="flex flex-col justify-center items-center flex-1">
            <article className="w-48 h-48">
                <img src={profileImg} alt={details.name} classname="object-cover w-full h-full" />
            </article>
            <h4>{details.name}</h4>
            <h4>{details.title}</h4>
      </article>
      <article className="flex flex-col gap-4 w-2/3">
        <p><b>Fecha de nacimiento: </b>{details.birthDate}</p>
        <p><b>País: </b>{details.country}</p>
        <p><b>Ciudad: </b>{details.city}</p>
        <p><b>Nacionalidad: </b>{details.nationality}</p>
        <p><b>Conocimientos: </b></p>
        <Technologies />
      </article>
      
    </article>
  );
}

export default Details;
