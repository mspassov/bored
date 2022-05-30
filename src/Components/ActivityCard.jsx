import React from "react";
import {
  FaMapMarker,
  FaUsers,
  FaAccessibleIcon,
  FaCoins,
  FaStar,
} from "react-icons/fa";

const ActivityCard = ({ data }) => {
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
    <div className="card-container">
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

      <div className="progress-buttons">
        <input
          type="radio"
          id="radioNotStarted"
          name="ProgressTracker"
          value="not-started"
          checked
        />
        <label className="not-started-btn" for="radioNotStarted">
          Not Started
        </label>

        <input
          type="radio"
          id="radioInProgress"
          name="ProgressTracker"
          value="in-progress"
          checked
        />
        <label className="in-progress-btn" for="radioInProgress">
          In Progress
        </label>

        <input
          type="radio"
          id="radioCompleted"
          name="ProgressTracker"
          value="completed"
          checked
        />
        <label className="completed-btn" for="radioCompleted">
          Completed
        </label>
      </div>
    </div>
  );
};

export default ActivityCard;
