import React from 'react';
import { connect } from 'react-redux';
import {fetchSingleRobot} from '../redux/singleRobot';


class SingleRobot extends React.Component {
  componentDidMount () {
    this.props.loadSingleRobot(this.props.match.params.robotId)
  }

  render() {
    const { robot } = this.props

    return (
      <div>
        <h1>Name: {robot.name}</h1>
        <ul>
          <li>Fuel Type: {robot.fuelType}</li>
          <li>Fuel Level: {robot.fuelLevel}</li>
          <li>Projects: {robot.projects || 'N/A'}</li>
        </ul>
        <img src={robot.imageUrl} style={{width: '300px', height: 'auto'}}/>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    robot: state.singleRobot
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadSingleRobot: (id) => dispatch(fetchSingleRobot(id))
  };
};

export default connect(mapState, mapDispatch)(SingleRobot);
