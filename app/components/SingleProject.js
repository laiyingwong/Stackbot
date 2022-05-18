import React from 'react';
import { connect } from 'react-redux';
import {fetchSingleProject} from '../redux/singleProject';


class SingleProject extends React.Component {
  componentDidMount () {
    this.props.loadSingleProject(this.props.match.params.projectId)
  }

  render() {
    const { project } = this.props
    const title = project.title
    const deadline = project.deadline || ''
    const priority = project.priority
    const description = project.description || ''
    const robots = project.robots || 'N/A' // NEED TO BE FIXED

    return (
      <div>
        <h1>Title: {title}</h1>
        <ul>
          <li>Description: {description}</li>
          <li>Priority: {priority}</li>
          <li>Deadline: {deadline}</li>
          <li>Robots: {robots}</li>
        </ul>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    project: state.singleProject
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadSingleProject: (id) => dispatch(fetchSingleProject(id))
  };
};

export default connect(mapState, mapDispatch)(SingleProject);
