import axios from 'axios'

const SET_SINGLE_PROJECT = 'SET_SINGLE_PROJECT';

export const setSingleProjects = (project) => {
  return {
    type: SET_SINGLE_PROJECT,
    project
  }
};

export const fetchSingleProject = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/projects/${id}`);
    dispatch(setSingleProjects(data))
  }
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function singleProjectReducer(state=[], action) {
  switch (action.type) {
    case SET_SINGLE_PROJECT:
      return action.project
  }
  return state;
}