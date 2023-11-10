import React from "react";
import { useState, useEffect } from "react";

function DetailsCard({ details }) {
    const [index, setIndex] = useState(0)
    const previousPhoto = () => {
        setIndex((currentImage) => (currentImage - 1 >= 0 ? currentImage - 1 : details.images.length - 1))
    }
    const nextPhoto = () => {
        setIndex((currentImage) => (currentImage + 1 < details.images.length ? currentImage + 1 : 0))
    }
    const imageCarousel = () => {
        nextPhoto()
    }
    useEffect(() => {
        const autoNextPhoto = setInterval(imageCarousel, 10000)
        return () => {
            clearInterval(autoNextPhoto)
        }
    }, [])

    return (
        <>
            {details && details.images ? (<div
                className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                        className="rounded-t-lg"
                        src={`/${details.images[index]}`}
                        alt={details.name} />
                        {console.log(details.images[index])}
                </div>
                <div className="p-6">
                    <h5
                        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {details.name}
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {details.desc}
                    </p>
                    <p className="text-base text-neutral-600 dark:text-neutral-200">
                        <small className="text-neutral-500 dark:text-neutral-400">{details.period}</small>
                    </p>
                </div>
            </div>) : null}

        </>
    )
}

export default DetailsCard