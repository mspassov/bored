import React, { useContext } from "react";
import ActivityCard from "./ActivityCard";
import { GlobalContext } from "../context/GlobalState";

const SavedActivitiesList = () => {
  const { savedActivities } = useContext(GlobalContext);

  return (
    <div className="container grid-container">
      {savedActivities.map((activity, id) => {
        return <ActivityCard key={id} data={activity} />;
      })}
    </div>
  );
};

export default SavedActivitiesList;
