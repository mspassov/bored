import React, { useContext } from "react";
import {
  FaMapMarker,
  FaUsers,
  FaAccessibleIcon,
  FaCoins,
} from "react-icons/fa";
import { GlobalContext } from "../context/GlobalState";
import axios from "axios";

const DecisionCard = ({ data, updateDecisionCard }) => {
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

  const { acceptActivity, savedActivities } = useContext(GlobalContext);

  const acceptFunc = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("loggedUser"));
    acceptActivity(data, userData.token);
    updateDecisionCard(null);
  };

  const declineFunc = (e) => {
    e.preventDefault();
    updateDecisionCard(null);
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
        <form onSubmit={declineFunc}>
          <button className="decision-btn decline-btn">Decline</button>
        </form>
        <form onSubmit={acceptFunc}>
          <button className="decision-btn accept-btn">Accept</button>
        </form>
      </div>
    </div>
  );
};

export default DecisionCard;
