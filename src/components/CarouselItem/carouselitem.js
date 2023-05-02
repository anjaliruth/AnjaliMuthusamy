import React from "react";

export const Carouselitem = ({ title, description, image }) => {
  return (
    <div className="carousel-item">
      <div></div>
      <div className="carousel-item-titile">
        {title}
      </div>
      <img className="carousel-item-image" src={image} alt="project image" />
    <div className="carousel-item-text">
        {description}
      </div>
    </div>
  );
};
