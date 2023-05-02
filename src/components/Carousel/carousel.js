import { Carouselitem } from "../CarouselItem/carouselitem"
import image1 from "../../Media/RPS.png";
import image2 from "../../Media/RPS.png";
import image3 from "../../Media/RPS.png";
import React, { useState } from "react";

export default function Carousel () {
 const [activeIndex,setActiveIndex] = useState(0);

    const lists = [{
        title: "Rock Paper Scissors",
        description: "This is a description",
        image: image1
    },{
        title: "Rock Paper Scissors",
        description: "This is a description",
        image: image2
    },
 {
        title: "Rock Paper Scissors",
        description: "This is a description",
        image: image3
    }]
    return (
        <div className = "carousel">
        <div className = "inner">
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        {lists.map((list, i) => (
            <Carouselitem key = {i} title = {list.title}  image = {list.image} description = {list.description}

            />
        )

       ) }
        </div>
        </div>
    )
}
