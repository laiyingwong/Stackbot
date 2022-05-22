import axios from 'axios'

const SET_SINGLE_PROJECT = 'SET_SINGLE_PROJECT';
const UPDATE_SINGLE_PROJECT = 'UPDATE_SINGLE_PROJECT';
const UNASSIGN_SINGLE_ROBOT ='UNASSIGN_SINGLE_ROBOT';


export const _setSingleProject = (project) => {
  return {
    type: SET_SINGLE_PROJECT,
    project
  }
};


export const _updateSingleProject = (project) => {
  return {
    type: UPDATE_SINGLE_PROJECT,
    project
  }
};

export const _unassignSingleRobot = (unassignedRobot) => {
  return {
    type: UNASSIGN_SINGLE_ROBOT,
    unassignedRobot
  }
}

export const fetchSingleProject = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/projects/${id}`);
    dispatch(_setSingleProject(data))
  }
};

export const updateSingleProject = (project, history) => {
  return async (dispatch) => {
    const { data: updated } = await axios.put(`/api/projects/${project.id}`, project);
    dispatch(_updateSingleProject(updated));
    history.goBack()
  }
};

export const unassignSingleRobot = (projectId, robot, history) => {
  return async (dispatch) => {
    const { data: unassigned } = await axios.put(`/api/projects/${projectId}/unassign-robot`, robot);
    dispatch(_unassignSingleRobot(unassigned));
    history.goBack();
  }
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function singleProjectReducer(state={}, action) {
  switch (action.type) {
    case SET_SINGLE_PROJECT:
      return action.project;

    case UPDATE_SINGLE_PROJECT:
      return action.project;

    case UNASSIGN_SINGLE_ROBOT:
    const assignedRobots = state.robots.filter(robot => robot.id !== action.unassignedRobot.id);
    return {...state, robots: assignedRobots}
  }
  return state;
}