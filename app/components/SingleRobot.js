import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleRobot } from '../redux/singleRobot';
import { unassignSingleProject } from '../redux/singleRobot';


class SingleRobot extends React.Component {

  componentDidMount () {
    this.props.loadSingleRobot(this.props.match.params.robotId)
  }

  render() {

    const { id, name, fuelType, fuelLevel, imageUrl, projects } = this.props.robot

    return (
      <div>
        <h1>Name: {name}</h1>
          <p>Fuel Type: {fuelType}</p>
          <p>Fuel Level: {fuelLevel}</p>
          <div>Projects: { (! projects || projects.length === 0) ? 'No task assigned at the moment!' :
            (<ul>
              {projects.map(project => (
                <div key={project.id}>
                  <Link to={`/projects/${project.id}`}>
                  <li key={project.id}>{project.title}</li>
                  </Link>
                  <Link to={`robots/${id}/unassign-project`} >
                  <button onClick={() => this.props.unassignSingleProject(id, project)}>Unassign</button>
                  </Link>
                </div>
              ))}
            </ul>)
            }</div>
        <img src={imageUrl} style={{width: '300px', height: 'auto'}}/>
        <Link to={`/robots/${id}/edit`}>
          <button type="button">Edit</button>
        </Link>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    robot: state.singleRobot
  };
};

const mapDispatch = (dispatch, {history}) => {
  return {
    loadSingleRobot: (id) => dispatch(fetchSingleRobot(id)),
    unassignSingleProject: (robotId, project) => dispatch(unassignSingleProject(robotId, project, history))
  };
};

export default connect(mapState, mapDispatch)(SingleRobot);
