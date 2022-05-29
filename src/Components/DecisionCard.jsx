import React from "react";
import {
  FaMapMarker,
  FaUsers,
  FaAccessibleIcon,
  FaCoins,
  FaStar,
} from "react-icons/fa";

const DecisionCard = ({ data }) => {
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
      return "High";
    } else if (acc > 0.33) {
      return "Moderate";
    } else {
      return "Low";
    }
  };

  return (
    <div className="card-container decision-card">
      <h3>Learn a new recipe</h3>
      <div className="card-item">
        <FaMapMarker color="#ed8f4c" />
        <p>
          <strong>Type of Activity:</strong> {data.type}
        </p>
      </div>

      <div className="card-item">
        <FaStar color="#ed8f4c" />
        <p>
          <strong>Level of Difficulty: </strong>
          {calcualteDifficulty(sampleDifficulty)}
        </p>
      </div>

      <div className="card-item">
        <FaCoins color="#ed8f4c" />
        <p>
          <strong>Price: </strong>
          {calculatePrice(samplePrice)}
        </p>
      </div>

      <div className="card-item">
        <FaUsers color="#ed8f4c" />
        <p>
          <strong>Number of Participants: </strong> 5
        </p>
      </div>

      <div className="card-item">
        <FaAccessibleIcon color="#ed8f4c" />
        <p>
          <strong>Level of Accessibility: </strong>{" "}
          {calculateAccessibility(0.1)}
        </p>
      </div>
      <div className="button-container">
        <button className="decision-btn decline-btn">Decline</button>
        <button className="decision-btn accept-btn">Accept</button>
      </div>
    </div>
  );
};

export default DecisionCard;
