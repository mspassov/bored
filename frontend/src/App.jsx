import React, { useContext } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import DecisionCard from "./Components/DecisionCard";
import SavedActivitiesList from "./Components/SavedActivitiesList";
import CompletedActivitiesList from "./Components/CompletedActivitiesList";
import { useState } from "react";
import { GlobalProvider } from "./context/GlobalState";
import { GlobalContext } from "./context/GlobalState";

const App = () => {
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

  const { savedActivities } = useContext(GlobalContext);

  return (
    <GlobalProvider>
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

      <h2>To-Do Activities</h2>
      <SavedActivitiesList />

      <h2>Completed Activities</h2>
      <CompletedActivitiesList />

      <br />
      <br />
      <Footer />
    </GlobalProvider>
  );
};

export default App;
