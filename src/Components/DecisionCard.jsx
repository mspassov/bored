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
      <h3>{data.activity}</h3>
      <div className="card-item">
        <FaMapMarker color="#ed8f4c" />
        <p>
          <strong>Type of Activity:</strong> {data.type}
        </p>
      </div>

      <div className="card-item">
        <FaCoins color="#ed8f4c" />
        <p>
          <strong>Price: </strong>
          {calculatePrice(data.price)}
        </p>
      </div>

      <div className="card-item">
        <FaUsers color="#ed8f4c" />
        <p>
          <strong>Number of Participants: </strong> {data.participants}
        </p>
      </div>

      <div className="card-item">
        <FaAccessibleIcon color="#ed8f4c" />
        <p>
          <strong>Level of Accessibility: </strong>
          {calculateAccessibility(data.accessibility)}
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