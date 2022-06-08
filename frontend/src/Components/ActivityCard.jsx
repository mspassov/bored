import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import {
  FaMapMarker,
  FaUsers,
  FaAccessibleIcon,
  FaCoins,
} from "react-icons/fa";

const ActivityCard = ({ data }) => {
  const { skipActivity, addCompletedActivity } = useContext(GlobalContext);

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

  const skipFunc = (e) => {
    e.preventDefault();
    skipActivity(data.key);
  };

  const completeFunc = (e) => {
    e.preventDefault();
    addCompletedActivity(data);
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

      <div className="button-container">
        <form onSubmit={skipFunc}>
          <button className="act-decision-btn skip-btn">Skip</button>
        </form>
        <form onSubmit={completeFunc}>
          <button className="act-decision-btn completed-btn">Completed</button>
        </form>
      </div>
    </div>
  );
};

export default ActivityCard;
