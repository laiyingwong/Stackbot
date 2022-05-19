import axios from 'axios'

const SET_PROJECTS = 'SET_PROJECTS';
const CREATE_PROJECT = 'CREATE_PROJECT';
const DELETE_PROJECT = 'DELETE_PROJECT';

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

export const _deleteProject = (id) => {
  return {
    type: DELETE_PROJECT,
    id
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

export const deleteProject = (id) => {
  return async (dispatch) => {
    await axios.delete(`/api/projects/${id}`);
    dispatch(_deleteProject(id));
  }
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function projectsReducer(state=[], action) {
  switch (action.type) {
    case SET_PROJECTS:
      return action.projects;
    case CREATE_PROJECT:
      return [...state, action.project];
    case DELETE_PROJECT:
      return state.filter((project) => project.id !== action.id);
  }
  return state;
}

