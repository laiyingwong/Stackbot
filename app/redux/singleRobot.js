import axios from 'axios'

const SET_SINGLE_ROBOT = 'SET_SINGLE_ROBOT';
const UPDATE_SINGLE_ROBOT = 'UPDATE_SINGLE_ROBOT';

export const _setSingleRobot = (robot) => {
  return {
    type: SET_SINGLE_ROBOT,
    robot
  }
};


export const _updateSingleRobot = (robot) => {
  return {
    type: UPDATE_SINGLE_ROBOT,
    robot
  }
};

export const fetchSingleRobot = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/robots/${id}`);
    dispatch(_setSingleRobot(data))
  }
};

export const updateSingleRobot = (robot, history) => {
  return async (dispatch) => {
    const { data: updated } = await axios.put(`/api/robots/${robot.id}`, robot);
    dispatch(_updateSingleRobot(updated));
    history.goBack();
  }
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function singleRobotReducer(state=[], action) {
  switch (action.type) {
    case SET_SINGLE_ROBOT:
      return action.robot;

    case UPDATE_SINGLE_ROBOT:
      console.log(state);
      return action.robot;
  }

  return state;
}