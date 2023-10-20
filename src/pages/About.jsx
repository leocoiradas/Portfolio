import React from "react";
import Details from "../components/details";

function About(){
    return (
        <section className="flex flex-col justify-center items-center min-h-[90vh] gap-8 text-yellow-400">
            <h3 className="text-center text-3xl">About me</h3>
            <Details />
        </section>
    )
}
export default About