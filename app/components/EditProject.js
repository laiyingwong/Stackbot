import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { _setSingleProject, fetchSingleProject, updateSingleProject } from '../redux/singleProject';
import ProjectForm from './ProjectForm'


class EditProject extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      priority: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.props.loadSingleProject(this.props.match.params.projectId)
    console.log(this.props);
  }

  componentWillUnmount() {
    this.props.clearProject();
  }

  componentDidUpdate(prevProps) {
    if (prevProps!== this.props) {
      this.setState({
        title: this.props.project.title || '',
        priority: this.props.project.priority
      });
    }
    console.log('State inside componentDidUpdate', this.state)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateProject({ ...this.props.project, ...this.state });
  }

  render() {
    const { title, priority } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <div>
        <h3>Edit project: </h3>
        <ProjectForm title={title} priority={priority} buttonName={"Edit!"} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    );
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
    updateProject: (project) => dispatch(updateSingleProject(project, history)),
    clearProject: () => dispatch(_setSingleProject({}))
  };
};

export default connect(mapState, mapDispatch)(EditProject);