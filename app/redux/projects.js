import axios from 'axios'

const SET_PROJECTS = 'SET_PROJECTS';
const CREATE_PROJECT = 'CREATE_PROJECT';

export const _setProjects = (projects) => {
  return {
    type: SET_PROJECTS,
    projects
  }
};

export const _createProject = (project) => {
  return {
    type: CREATE_PROJECT,
    project
  }
}

export const fetchProjects = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/projects');
    dispatch(_setProjects(data))
  }
};

export const createProject = (project) => {
  return async (dispatch) => {
    const { data: created } = await axios.post('/api/projects', project);
    dispatch(_createProject(created));
  };
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function projectsReducer(state=[], action) {
  switch (action.type) {
    case SET_PROJECTS:
      return action.projects;
    case CREATE_PROJECT:
      return [...state, action.project];
  }
  return state;
}

