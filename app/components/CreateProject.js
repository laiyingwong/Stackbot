import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { createProject } from '../redux/projects';
import ProjectForm from './ProjectForm'


class CreateProject extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      priority: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createProject({ ...this.state });
    this.setState({
      title: '',
      priority: 1
    })
  }

  render() {
    const { title, priority } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <div>
          <div id='project-border' className="row align-items-center content">

            <div className="col-md-4 order-2 order-md-1">
              <img className="img-fluid" src='/task.png' />
            </div>

            <div className="col-md-8 text-center order-1 order-md-2">
              <div className="row justify-content-center">
                <div className="col-10 col-lg-8 mb-5 mb-md-0">
                  <h3 className="title">Create a new project:</h3>
                  <ProjectForm title={title} priority={priority} buttonName={"Create!"} handleChange={handleChange} handleSubmit={handleSubmit} />
                </div>
              </div>
            </div>

          </div>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  createProject: (project) => dispatch(createProject(project))
});

export default connect(null, mapDispatchToProps)(CreateProject);