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
      <Header/>
      
      <button onClick={getActivity}>What Should I do?</button>
      {activitiesArray.map((activity, id) => {
        return (
          <div key={id}>
            {activity.activity}
          </div>
        );
      })}

      <ActivityCard />
    </React.Fragment>
  );
};

export default App;
