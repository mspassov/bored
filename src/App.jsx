import React from "react";
import axios from "axios";
import Header from "./Components/Header";
import ActivityCard from "./Components/ActivityCard";
import { useState } from "react";

const App = () => {
  const boredBaseUrl = "https://www.boredapi.com/api/";
  const [activitiesArray, setActivitiesArray] = useState([]);

  const getActivity = async () => {
    try {
      const { data } = await axios.get(boredBaseUrl + "activity");
      setActivitiesArray([...activitiesArray, data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className="container button-container">
        <button className="hero-button" onClick={getActivity}>
          What Should I do?
        </button>
      </div>
      <div className="container grid-container">
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>

      {activitiesArray.map((activity, id) => {
        return <div key={id}>{activity.activity}</div>;
      })}
      <br />
    </React.Fragment>
  );
};

export default App;
