import React from "react";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

function DetailsCard({ details }) {
    const [index, setIndex] = useState(0)
    const previousPhoto = () => {
        setIndex((currentImage) => (currentImage - 1 >= 0 ? currentImage - 1 : details.images.length - 1))
    }
    const nextPhoto = () => {
        setIndex((currentImage) => (currentImage + 1 > details.images.length - 1 ? 0 : currentImage + 1))
    }
    const imageCarousel = () => {
        nextPhoto()
    }
    useEffect(() => {
        const autoNextPhoto = setInterval(imageCarousel, 10000)
        return () => {
            clearInterval(autoNextPhoto)
        }
    }, [index, details])
    useEffect(() => {
        setIndex(0);
    }, [details]);

    const gitHubIcon = <FaGithub />

    return (
        <section className="lg:max-w-[75vw]">
            {details && details.images ? (<div
                className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="h-[14rem] lg:h-[40rem]">
                    <img
                        className=" h-full w-full rounded-t-lg object-fill"
                        src={details.images[index]}
                        alt={details.name} />
                </div>
                <div className="w-full flex flex-col lg:flex-row flex-wrap justify-evenly items-center p-4 gap-2">
                    <button onClick={previousPhoto} className="w-4/5 lg:w-[45%] bg-purple-400 hover:bg-purple-700 text-center rounded-md px-4 py-3">Previous Photo</button>
                    <button onClick={nextPhoto} className="w-4/5 lg:w-[45%] bg-purple-400 hover:bg-purple-700 text-center rounded-md px-4 py-3">Next Photo</button>
                </div>
                <div className="p-6 text-center lg:text-start">
                    <h5
                        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {details.name}
                    </h5>
                    <p className="mb-4 text-sm lg:text-base text-neutral-600 dark:text-neutral-200">
                        {details.desc}
                    </p>
                    <p className="text-base text-neutral-600 dark:text-neutral-200">
                        <small className="text-neutral-500 dark:text-neutral-400">{details.period}</small>
                    </p>
                    <div className="w-full flex justify-center items-center">
                        <a href="" className="w-52 inline-flex items-baseline text-center bg-black text-white hover:bg-slate-800 px-6 py-3 gap-2 rounded-md">{gitHubIcon} Github repository</a>
                    </div>
                </div>
            </div>) : null}

        </section>
    )
}

export default DetailsCard