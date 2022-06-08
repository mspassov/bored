import React from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import DecisionCard from "./DecisionCard";
import SavedActivitiesList from "./SavedActivitiesList";
import CompletedActivitiesList from "./CompletedActivitiesList";
import { useState } from "react";

const Dashboard = () => {
  const boredBaseUrl = "http://www.boredapi.com/api/";
  const [decisionCard, setDecisionCard] = useState(null);

  const getActivity = async () => {
    try {
      const { data } = await axios.get(boredBaseUrl + "activity");
      setDecisionCard(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="container button-container">
        <button className="hero-button" onClick={getActivity}>
          What Should I do?
        </button>
      </div>

      <div className="container decision-container">
        {!decisionCard ? (
          <p className="prompt">Try a New Activity!</p>
        ) : (
          <DecisionCard
            data={decisionCard}
            updateDecisionCard={setDecisionCard}
          />
        )}
      </div>

      <h2 className="activity-header">To-Do Activities</h2>
      <SavedActivitiesList />

      <h2 className="activity-header">Completed Activities</h2>
      <CompletedActivitiesList />

      <br />
      <br />
      <Footer />
    </>
  );
};

export default Dashboard;
