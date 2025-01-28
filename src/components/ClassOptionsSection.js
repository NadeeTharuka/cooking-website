import React from "react";
import "../styles/ClassOptionsSection.css";

import curryImage from "../images/traditional_sri_lankan_curry.jpg";
import coconutImage from "../images/cooking_with_coconut.jpg";
import streetFoodImage from "../images/sri_lankan_street_food_adventure.jpg";
import backgroundImage from "../images/background.jpg"; // Import your background image

const Card = ({ imageSrc, title }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};

const App = () => {
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

  return (
    <div className="container">
      <div
        className="background-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {cardsData.map((card, index) => (
          <Card key={index} imageSrc={card.imageSrc} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default App;
