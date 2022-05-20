import axios from 'axios'

const SET_SINGLE_PROJECT = 'SET_SINGLE_PROJECT';
const UPDATE_SINGLE_PROJECT = 'UPDATE_SINGLE_PROJECT';


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
  }
  return state;
}