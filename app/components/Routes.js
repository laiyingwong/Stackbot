import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AllRobots from './AllRobots'
import SingleRobot from './SingleRobot'
import AllProjects from './AllProjects'
import SingleProject from './SingleProject'


const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          Welcome!
          <Link to='/'>Homepage</Link>
          <Link to='/robots'>Robots</Link>
          <Link to='/projects'>Projects</Link>
        </nav>
        <main>
          <h1>
            Welcome to StackBot Project Management: your robot employees are
            awaiting assignments!
          </h1>
          <p>This seems like a nice place to get started with some Routes!</p>
        </main>
        <Route exact path="/robots" component={AllRobots} />
        <Route path="/robots/:robotId" component={SingleRobot} />
        <Route exact path="/projects" component={AllProjects} />
        <Route path="/projects/:projectId" component={SingleProject} />

      </div>
    </Router>
  );
};

export default Routes;
