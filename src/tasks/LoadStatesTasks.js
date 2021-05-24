import { features } from "../data/usa.json";

class LoadStatesTask {
  load = (setState) => {
    setState(features);
  };
}

export default LoadStatesTask;
