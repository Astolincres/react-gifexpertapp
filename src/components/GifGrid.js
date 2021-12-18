// import { useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { ImagesContainer } from "./ImagesContainer";



export const GifGrid = ({category}) => {
    const {data:images, loading} = useFetchGifs(category);

    // //Se renderiza por primera vez nada más.
    return (
        <>
            <h3 className="animate__animated animate__lightSpeedInLeft">{category}</h3>
            { loading ? 'Loading':null}
            <div className="cardContainer">
                {images.map((image) => 
                    <ImagesContainer 
                        key={image.id} 
                        image={image}
                    />
                )}
            </div>
        </>
    )
}
