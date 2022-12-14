import { combineReducers } from 'redux';
import projectsReducer from './projects';
import robotsReducer from './robots';
import singleRobotReducer from './singleRobot';
import singleProjectReducer from './singleProject';

const appReducer = combineReducers({
  projects: projectsReducer,
  robots: robotsReducer,
  singleRobot: singleRobotReducer,
  singleProject: singleProjectReducer,
});

export default appReducer;
