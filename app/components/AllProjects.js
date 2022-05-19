import React from 'react';
import { connect } from 'react-redux';
import { fetchProjects, deleteProject } from '../redux/projects'
import {Link} from 'react-router-dom'
import CreateProject from './CreateProject'

// Notice that we're exporting the AllProjects component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllProjects extends React.Component {
  componentDidMount () {
    this.props.getProjects()
  }

  render() {
    const { projects, deleteProject } = this.props;
    return (
      <div>
        <CreateProject />
        {(projects === [] || projects === undefined) ?
        (<h1>No Projects</h1>) :
        (<div>
          {projects.map(project => {
            return (
              <div key={project.id}>
                <Link to={`/projects/${project.id}`}>
                <h1 className="remove-project">{project.title}</h1>
                </Link>
                <button className="remove-project" onClick={() => deleteProject(project.id)}>❌</button>
              </div>
            )
          })}
        </div>)}
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    projects: state.projects
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProjects: () => dispatch(fetchProjects()),
    deleteProject: (id) => dispatch(deleteProject(id))
  };
};

export default connect(mapState, mapDispatch)(AllProjects);
