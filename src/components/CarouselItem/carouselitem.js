import React from "react";

export const Carouselitem = ({
  title,
  description,
  image,
  githubUrl,
  pageUrl,
}) => {
  function goToGithub() {
    window.open(githubUrl, "_blank");
  }
  function goToPage() {
    window.open(pageUrl, "_blank");
  }

  return (
    <div className="carousel-item">
      <img className="carousel-item-image" src={image} alt="project image" />
      <div className="carousel-content">
        <h2 className="carousel-item-title">{title}</h2>
        <p className="carousel-item-text">{description}</p>
        <div className="carousel-buttons2">
          <button onClick={goToPage}>URL</button>
          <button onClick={goToGithub}>Github</button>
        </div>
      </div>
    </div>
  );
};
