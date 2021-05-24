import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import CovidMap from "./CovidMap";
import Legend from "./Legend";
import LoadStatesTask from "../tasks/LoadStatesTasks";
import LoadStatesTask from "../tasks/LoadStatesTasks";

const Covid19 = () => {
  const [states, setStates] = useState([]);

  const load = () => {
    const LoadStatesTask = new LoadStatesTask();
    loadStatesTask.load(setStates);
  };

  useEffect();

  return (
    <div>
      {states.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <CovidMap />
          <Legend />
        </div>
      )}
    </div>
  );
};

export default Covid19;
