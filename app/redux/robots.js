import axios from 'axios'

const SET_ROBOTS = 'SET_ROBOTS';
const CREATE_ROBOT = 'CREATE_ROBOT';

export const _setRobots = (robots) => {
  return {
    type: SET_ROBOTS,
    robots
  }
};

export const _createRobot = (robot) => {
  return {
    type: CREATE_ROBOT,
    robot
  }
}

export const fetchRobots = () => {
  return async (dispatch) => {
    const { data: robots } = await axios.get('/api/robots');
    dispatch(_setRobots(robots))
  }
};

export const createRobot = (robot) => {
  return async (dispatch) => {
    const { data: created } = await axios.post('/api/robots', robot);
    dispatch(_createRobot(created));
  };
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function robotsReducer(state=[], action) {
  switch (action.type) {
    case SET_ROBOTS:
      return action.robots
    case CREATE_ROBOT:
      return [...state, action.robot];
  }
  return state;
}

