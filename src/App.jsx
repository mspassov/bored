import React, { useContext } from "react";
import axios from "axios";
import Header from "./Components/Header";
import ActivityCard from "./Components/ActivityCard";
import DecisionCard from "./Components/DecisionCard";
import { useState } from "react";
import { GlobalProvider } from "./context/GlobalState";
import { GlobalContext } from "./context/GlobalState";

const App = () => {
  const boredBaseUrl = "https://www.boredapi.com/api/";
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
          <DecisionCard data={decisionCard} />
        )}
      </div>

      <h2>Saved Activities</h2>

      <div className="container grid-container">
        {savedActivities.map((activity, id) => {
          return <ActivityCard key={id} data={activity} />;
        })}
      </div>

      <br />
    </GlobalProvider>
  );
};

export default App;
