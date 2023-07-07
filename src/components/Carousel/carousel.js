import { Carouselitem } from "../CarouselItem/carouselitem";
import image1 from "../../Media/Trivia.png";
import image2 from "../../Media/TipSplitter2.png";
import image3 from "../../Media/CurrencyConverter.png";
import React, { useState } from "react";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > lists.length) {
      newIndex = lists.length - 1;
    }
    setActiveIndex(newIndex);
  };
  const lists = [
    {
      title: "Trivia Game",
      description: "Test your knowledge in a thrilling Trivia Game. Users get to choose from over 20 categories, varying difficulty levels and game length. Earn points for correct answers and reset the game at anytime.",
      image: image1,
      githubUrl:"https://github.com/anjaliruth/TRIVIA/blob/main/README.md", 
      pageUrl: "https://anjaliruth.github.io/TRIVIA/"
    },
    {
      title: "Tip Splitter",
      description: "Need to figure out exactly how much to tip?  \nTry out this tip splitter.  \nDining as a group and want to split the bill? We got that covered too."
,
      image: image2,
      githubUrl:"https://github.com/anjaliruth/TipSplitter/blob/main/README.md", 
      pageUrl: "https://anjaliruth.github.io/TipSplitter/"
    },
    {
      title: "Currency Converter",
      description: "Input your base currency and amount, and instantly obtain the converted value in your desired target currency. It's quick, accurate, and convenient for all your currency conversion needs.",
      image: image3,
      githubUrl:"https://github.com/anjaliruth/CorrencyConverter/blob/master/README.md", 
      pageUrl: "https://anjaliruth.github.io/CorrencyConverter/"
    },
  ];
  return (
    <div className="carousel">
      <div
        className="inner"
        // style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {lists.map((list, i) => (
          <Carouselitem
            key={i}
            title={list.title}
            image={list.image}
            description={list.description} width={"100%"}
            githubUrl={list.githubUrl}
            pageUrl={list.pageUrl}
          />
        ))}
      </div>
      <div className="carousel-buttons">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          className="button-arrows"
        >
          {" "}
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <div className="indicators">
          {lists.map((list, i) => {
            return (
              <button
                onClick={() => {
                  updateIndex(i);
                }}
                className="indicator-buttons"
              >
                <span className={`material-symbols-outlined ${i===activeIndex ? "indicator-symbol-active":"indicator-symbol"}`}>
                 
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
