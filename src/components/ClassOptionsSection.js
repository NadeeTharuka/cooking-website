import React, { useEffect, useState } from "react";
import "../styles/ClassOptionsSection.css";

import curryImage from "../images/smiling.jpg";
import coconutImage from "../images/cooking_with_coconut.jpg";
import streetFoodImage from "../images/sri_lankan_street_food_adventure.jpg";
import backgroundImage from "../images/background.jpg";

const Card = ({ imageSrc, title, delay }) => {
  return (
    <div className="card" style={{ animationDelay: `${delay}s` }}>
      <div className="card-inner">
        <div className="card-front">
          <img src={imageSrc} alt={title} />
        </div>
        <div className="card-back">
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
};

const ClassOptionsSection = () => {
  const [showCards, setShowCards] = useState(false);
  const cardsData = [
    {
      imageSrc: curryImage,
      title: "Traditional Sri Lankan Curry",
    },
    {
      imageSrc: coconutImage,
      title: "Cooking with Coconut: Sweet and Savory",
    },
    {
      imageSrc: streetFoodImage,
      title: "Sri Lankan Street Food Adventure",
    },
  ];

  // Show cards after 2 seconds (background appears first)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCards(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <div
        className="background-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {showCards &&
          cardsData.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              delay={index * 0.5} // Staggered delay (0s, 0.5s, 1s)
            />
          ))}
      </div>
    </div>
  );
};

export default ClassOptionsSection;