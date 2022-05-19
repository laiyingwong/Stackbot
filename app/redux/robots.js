import axios from 'axios'

const SET_ROBOTS = 'SET_ROBOTS';
const CREATE_ROBOT = 'CREATE_ROBOT';
const DELETE_ROBOT = 'DELETE_ROBOT';

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

export const _deleteRobot = (id) => {
  return {
    type: DELETE_ROBOT,
    id
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

export const deleteRobot = (id) => {
  return async (dispatch) => {
    await axios.delete(`/api/robots/${id}`);
    dispatch(_deleteRobot(id));
  }
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function robotsReducer(state=[], action) {
  switch (action.type) {
    case SET_ROBOTS:
      return action.robots;
    case CREATE_ROBOT:
      return [...state, action.robot];
    case DELETE_ROBOT:
      return state.filter((robot) => robot.id !== action.id);
  }
  return state;
}

