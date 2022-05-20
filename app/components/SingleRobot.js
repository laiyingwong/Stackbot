import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleRobot } from '../redux/singleRobot';
import { deleteProject } from '../redux/projects'


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
                  <button onClick={() => this.props.deleteProject(project.id)}>Unassign</button>
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

const mapDispatch = (dispatch) => {
  return {
    loadSingleRobot: (id) => dispatch(fetchSingleRobot(id)),
    deleteProject: (id) => dispatch(deleteProject(id))
  };
};

export default connect(mapState, mapDispatch)(SingleRobot);
