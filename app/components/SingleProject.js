import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleProject } from '../redux/singleProject';
import { deleteRobot } from '../redux/robots';
import { unassignSingleRobot } from '../redux/singleProject';


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
    const robots = project.robots

    return (
      <div>
        <h1>Title: {title}</h1>
          <p>Description: {description}</p>
          <p>Priority: {priority}</p>
          <p>Deadline: {deadline}</p>
          <div>Robots: { (! robots || robots.length === 0) ? 'No robot assigned at the moment!' :
            (<ul>
              {robots.map(robot => (
                <div key={robot.id}>
                  <Link to={`/robots/${robot.id}`}>
                    <li>{robot.name}</li>
                  </Link>
                  <Link to={`projects/${project.id}/unassign-robot`} >
                  <button onClick={() => this.props.unassignSingleRobot(project.id, robot)}>Unassign</button>
                  </Link>
                </div>
              ))}
            </ul>
            )}</div>
            <Link to={`/projects/${project.id}/edit`}>
              <button type="button">Edit</button>
           </Link>
           <button>Complete</button>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    project: state.singleProject
  };
};

const mapDispatch = (dispatch, {history}) => {
  return {
    loadSingleProject: (id) => dispatch(fetchSingleProject(id)),
    unassignSingleRobot: (projectId,robot) => dispatch(unassignSingleRobot(projectId, robot, history))
  };
};

export default connect(mapState, mapDispatch)(SingleProject);
