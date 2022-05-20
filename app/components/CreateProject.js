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
  }

  render() {
    const { title, priority } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <div>
        <h3>Create a new project:</h3>
        <ProjectForm title={title} priority={priority} buttonName={"Create!"} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  createProject: (project) => dispatch(createProject(project))
});

export default connect(null, mapDispatchToProps)(CreateProject);