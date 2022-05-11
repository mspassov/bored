import React from "react";

const ActivityCard = () => {
  const sampleDifficulty = 0.5;
  const samplePrice = 0.99;

  const calcualteDifficulty = (diff) => {
    if (diff > 0.66) {
      return "Hard";
    } else if (diff > 0.33) {
      return "Medium";
    } else {
      return "Easy";
    }
  };

  const calculatePrice = (p) => {
    if (p > 0.66) {
      return "$$$";
    } else if (p > 0.33) {
      return "$$";
    } else {
      return "$";
    }
  };

  const calculateAccessibility = (acc) => {
    if (acc > 0.66) {
      return "Very Accessible";
    } else if (acc > 0.33) {
      return "Moderately Accessible";
    } else {
      return "Not Very Accessible";
    }
  };

  return (
    <div className="card-container">
      <h3>Learn a new recipe</h3>
      <p>Type of Activity: Education</p>
      <p>Level of Difficulty: {calcualteDifficulty(sampleDifficulty)}</p>
      <p>Price: {calculatePrice(samplePrice)}</p>
      <p>Number of Participants: 5</p>
      <p>Level of Accessibility: {calculateAccessibility(0.1)}</p>
    </div>
  );
};

export default ActivityCard;
