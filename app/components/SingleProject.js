import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleProject, unassignSingleRobot, updateSingleProject } from '../redux/singleProject';


class SingleProject extends React.Component {
  constructor () {
    super();
    this.markComplete = this.markComplete.bind(this)
  }

  componentDidMount () {
    this.props.loadSingleProject(this.props.match.params.projectId)
  }

  markComplete () {
    this.props.updateSingleProject({...this.props.project, completed: true})
  }

  render() {
    const { project } = this.props
    const { title, priority, robots} = project

    const deadline = project.deadline || 'ASAP'
    const description = project.description || 'We got this!'

    const status = project.completed ? 'completed' : 'in progress'
    const statusBadge = project.completed ? 'badge badge-pill badge-info' : 'badge badge-pill badge-warning'
    const statusImgURL = project.completed ? '/completed.png' : '/hardWork.png'
    const disabled = project.completed ? 'disabled' : ''

    return (
      <div className="container single-project">

        <h1 className="title">{title}<sup><span className={statusBadge}>{status}</span></sup></h1>
        <hr />

        <div className="row align-items-center content">

          <div className="col-md-4 order-2 order-md-1">
            <img src={statusImgURL} className="img-fluid"/>
          </div>

          <div className="single-project-content col-md-8 text-center order-1 order-md-2">

              <div className="col-10 col-lg-8 mb-5 mb-md-0">

                  <p>Description: {description}</p>
                  <p>Priority: {priority}</p>
                  <p>Deadline: {deadline}</p>
                  <div>Robots: { (!robots || robots.length === 0) ? 'No robot assigned at the moment!' :
                    (<ul>
                      {robots.map(robot => (
                        <div className="assigned-robots" key={robot.id}>
                          <Link to={`/robots/${robot.id}`}>
                            <li>{robot.name}</li>
                          </Link>

                          <Link to={`projects/${project.id}/unassign-robot`} >
                          <button className="btn btn-danger" onClick={() => this.props.unassignSingleRobot(project.id, robot)}>Unassign</button>
                          </Link>
                        </div>
                      ))}
                    </ul>
                    )}</div>

                  <div className="single-project-btns">
                    <button className="btn btn-info" disabled={disabled} onClick={() => this.markComplete()}>Mark as Complete</button>
                    <Link to={`/projects/${project.id}/edit`}>
                      <button className="edit-btn btn btn-success" type="button">Edit</button>
                    </Link>
                  </div>

              </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = (state) => ({
    project: state.singleProject
});

const mapDispatch = (dispatch, {history}) => {
  return {
    loadSingleProject: (id) => dispatch(fetchSingleProject(id)),
    unassignSingleRobot: (projectId,robot) => dispatch(unassignSingleRobot(projectId, robot, history)),
    updateSingleProject: (project) => dispatch(updateSingleProject(project))
  };
};

export default connect(mapState, mapDispatch)(SingleProject);

