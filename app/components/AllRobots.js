import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchRobots, deleteRobot } from '../redux/robots'
import CreateRobot from './CreateRobot'

// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllRobots extends React.Component {
  componentDidMount () {
    this.props.getRobots()
  }

  render() {
    const { robots, deleteRobot } = this.props;
    return (
      <div className="container" >
        <CreateRobot />
        <h3 className="title row justify-content-center">Featured StackBots</h3>
        <hr/>
        {(robots === [] || robots === undefined) ?
        (<h1>No Robots</h1>) :
        (<div>
          {robots.map(robot => {
            return (
              <div className="single-robot-div" key={robot.id}>
                <button className="remove-robot btn btn-danger" onClick={() => deleteRobot(robot.id)}>X</button>
                <Link to={`/robots/${robot.id}`}>
                  <h3 className="remove-robot robot-title">{robot.name}</h3>
                </Link>

                  <br />
                  <img src={robot.imageUrl} style={{width: '300px', height: 'auto'}}/>
              </div>
            )
          })}
        </div>)}
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    robots: state.robots
  };
};

const mapDispatch = (dispatch) => {
  return {
    getRobots: () => dispatch(fetchRobots()),
    deleteRobot: (id) => dispatch(deleteRobot(id))
  };
};

export default connect(mapState, mapDispatch)(AllRobots);
