import React from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../redux/projects'
import {Link} from 'react-router-dom'

// Notice that we're exporting the AllProjects component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllProjects extends React.Component {
  componentDidMount () {
    this.props.getProjects()
  }

  render() {
    const { projects } = this.props;
    return (
      (projects === [] || projects === undefined) ?
      (<h1>No Projects</h1>) :
      (<div>
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <Link to={`/projects/${project.id}`}>
              <h1>{project.title}</h1>
              </Link>
            </div>
          )
        })}
      </div>)
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
    getProjects: () => dispatch(fetchProjects())
  };
};

export default connect(mapState, mapDispatch)(AllProjects);
