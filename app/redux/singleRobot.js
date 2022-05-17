import axios from 'axios'

const SET_SINGLE_ROBOT = 'SET_SINGLE_ROBOT';

export const setSingleRobots = (robot) => {
  return {
    type: SET_SINGLE_ROBOT,
    robot
  }
};

export const fetchSingleRobot = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/robots/${id}`);
    dispatch(setSingleRobots(data))
  }
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function singleRobotReducer(state=[], action) {
  switch (action.type) {
    case SET_SINGLE_ROBOT:
      return action.robot
  }
  return state;
}