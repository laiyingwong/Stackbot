import React from 'react';
import { connect } from 'react-redux';
import { fetchRobots } from '../redux/robots'
import {Link} from 'react-router-dom'

// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllRobots extends React.Component {
  componentDidMount () {
    this.props.getRobots()
  }

  render() {
    const { robots } = this.props;
    return (
      (robots === [] || robots === undefined) ?
      (<h1>No Robots</h1>) :
      (<div>
        {robots.map((robot, idx) => {
          return (
            <div key={idx}>
              <Link to={`/robots/${robot.id}`}>
                <h1>{robot.name}</h1>
                <img src={robot.imageUrl} />
              </Link>
            </div>
          )
        })}
      </div>)
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
    getRobots: () => dispatch(fetchRobots())
  };
};

export default connect(mapState, mapDispatch)(AllRobots);
