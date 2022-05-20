import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { createRobot } from '../redux/robots';
import RobotForm from './RobotForm'


class CreateRobot extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      fuelType: 'Electric',
      fuelLevel: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
    console.log(this.state)
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createRobot({ ...this.state });
  }

  render() {
    const { name, fuelType, fuelLevel } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <div>
        <h3>Create a new robot:</h3>
        <RobotForm name={name} fuelLevel={fuelLevel} fuelType={fuelType} buttonName={'Create!'} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  createRobot: (robot) => dispatch(createRobot(robot))
});

export default connect(null, mapDispatchToProps)(CreateRobot);