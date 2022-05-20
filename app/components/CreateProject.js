import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { createProject } from '../redux/projects';


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
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Creare a new project:</label>
        <input name="title" value={title} placeholder="new project title" onChange={handleChange}/>
        <br />
        <label htmlFor="priority">Priority level (1-10): </label>
        <input type="number" name="priority" value={priority}max="10" min="1" onChange={handleChange}/>
        <br />
        <button type="submit">Create!</button>
      </form>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  createProject: (project) => dispatch(createProject(project))
});

export default connect(null, mapDispatchToProps)(CreateProject);