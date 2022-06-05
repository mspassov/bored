import React, { useContext } from "react";
import CompletedCard from "./CompletedCard";
import { GlobalContext } from "../context/GlobalState";

const SavedActivitiesList = () => {
  const { completedActivities } = useContext(GlobalContext);

  return (
    <div className="container grid-container">
      {completedActivities.map((activity, id) => {
        return <CompletedCard key={id} data={activity} />;
      })}
    </div>
  );
};

export default SavedActivitiesList;
