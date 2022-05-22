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
      <div className="container" >
        <CreateProject />
        <h3 className="title row justify-content-center">Projects Assigned</h3>
        <hr/>
        {(projects === [] || projects === undefined) ?
        (<h1>No Projects</h1>) :
        (<div>
          {projects.map(project => {
            const status = project.completed ? 'completed' : 'in progress';
            const statusBadge = project.completed ? 'badge badge-pill badge-info' : 'badge badge-pill badge-warning'
            return (
              <div key={project.id} className="container">
                <button className="remove-project btn btn-danger" onClick={() => deleteProject(project.id)}>X</button>
                <Link to={`/projects/${project.id}`}>
                <h3 className="remove-project project-title">{project.title}<sup><span className={statusBadge}>{status}</span></sup></h3>
                </Link>
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