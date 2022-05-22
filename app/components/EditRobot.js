import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { _setSingleRobot, fetchSingleRobot, updateSingleRobot } from '../redux/singleRobot';
import RobotForm from './RobotForm'


class EditRobot extends React.Component {
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

  componentDidMount () {
    this.props.loadSingleRobot(this.props.match.params.robotId)
    console.log(this.props);
  }

  componentWillUnmount() {
    this.props.clearRobot();
  }

  componentDidUpdate(prevProps) {
    if (prevProps!== this.props) {
      this.setState({
        name: this.props.robot.name || '',
        fuelType: this.props.robot.fuelType || 'Electric',
        fuelLevel: this.props.robot.fuelLevel || 100
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
    this.props.updateRobot({ ...this.props.robot, ...this.state });
  }

  render() {
    const { name, fuelLevel } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <div className="container edit-robot">
        <h1 className="title">Edit {name} </h1>
        <hr />
        <RobotForm name={name} fuelLevel={fuelLevel} buttonName={'Done!'} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    );
  }
}


const mapState = (state) => {
  return {
    robot: state.singleRobot
  };
};

const mapDispatch = (dispatch, {history}) => {
  return {
    loadSingleRobot: (id) => dispatch(fetchSingleRobot(id)),
    updateRobot: (robot) => dispatch(updateSingleRobot(robot, history)),
    clearRobot: () => dispatch(_setSingleRobot({}))
  };
};

export default connect(mapState, mapDispatch)(EditRobot);