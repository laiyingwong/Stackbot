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
      <div className="container single-robot">
        <h1 className="title">{name}</h1>
        <hr />

        <div className="row align-items-center content">

          <div className="col-md-4 order-2 order-md-1">
            <img src={imageUrl} className="img-fluid"/>
          </div>

          <div className="single-robot-content col-md-8 text-center order-1 order-md-2">

              <div className="col-10 col-lg-8 mb-5 mb-md-0">

                <p>Fuel Type: {fuelType}</p>
                <p>Fuel Level: {fuelLevel}</p>
                <div>Projects: { (! projects || projects.length === 0) ? 'No task assigned at the moment!' :
                  (<ul>
                    {projects.map(project => (
                      <div className="assigned-projects" key={project.id}>
                        <Link to={`/projects/${project.id}`}>
                        <li key={project.id}>{project.title}</li>
                        </Link>
                        <Link to={`robots/${id}/unassign-project`} >
                        <button className="btn btn-danger" onClick={() => this.props.unassignSingleProject(id, project)}>Unassign</button>
                        </Link>
                      </div>
                    ))}
                  </ul>)
                  }</div>

                <Link to={`/robots/${id}/edit`}>
                  <button className="btn btn-success" type="button">Edit</button>
                </Link>

              </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = (state) => ({
    robot: state.singleRobot
});

const mapDispatch = (dispatch, {history}) => {
  return {
    loadSingleRobot: (id) => dispatch(fetchSingleRobot(id)),
    unassignSingleProject: (robotId, project) => dispatch(unassignSingleProject(robotId, project, history))
  };
};

export default connect(mapState, mapDispatch)(SingleRobot);
