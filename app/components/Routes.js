import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Homepage from './Homepage'
import AllRobots from './AllRobots'
import SingleRobot from './SingleRobot'
import CreateRobot from './CreateRobot'
import EditRobot from './EditRobot'
import AllProjects from './AllProjects'
import SingleProject from './SingleProject'
import EditProject from './EditProject'


const Routes = () => {
  return (
    <Router>
      <div>

        <nav className="navbar navbar-expand-sm sticky-top">

          <Link to="/" className="navbar-brand">
            Stackb<span><i className="bi bi-robot"></i></span>t</Link>

          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#expandme"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="expandme">
            <Link to='/' className="nav-item nav-link" >Homepage</Link>
            <Link to='/robots' className="nav-item nav-link">Robots</Link>
            <Link to='/projects' className="nav-item nav-link">Projects</Link>
          </div>

        </nav>

        <Route exact path="/" component={Homepage} />

        <Route exact path="/robots" component={AllRobots} />
        <Route exact path="/robots/:robotId" component={SingleRobot} />
        <Route exact path="/robots/:robotId/edit" component={EditRobot} />

        <Route exact path="/projects" component={AllProjects} />
        <Route exact path="/projects/:projectId" component={SingleProject} />
        <Route exact path="/projects/:projectId/edit" component={EditProject} />

      </div>
    </Router>
  );
};

export default Routes;
