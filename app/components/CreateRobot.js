import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { createRobot } from '../redux/robots';


class CreateRobot extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
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
    this.props.createRobot({ ...this.state });
  }

  render() {
    console.log('PROPS', this.props)
    const { name } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Creare a new robot:</label>
        <input name="name" value={name} placeholder="new robot name" onChange={handleChange}/>
        <button type="submit">Create!</button>
      </form>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  createRobot: (robot) => dispatch(createRobot(robot))
});

export default connect(null, mapDispatchToProps)(CreateRobot);