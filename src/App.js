import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Components
import NavBarComponent from './components/NavBarComponent';
import Modal from './components/Modal';
// pages
import StatsPage from './pages/StatsPage';
import DepartmentPage from './pages/DepartmentPage';
import NotificationPage from './pages/NotificationPage';
import SchedulePage from './pages/SchedulePage';


// import logo from './logo.svg';
// import './App.css';
import './sass/main.scss';

function App() {
  return (
    <div className="app-container">
      <Router>
        <NavBarComponent />
        {/* <Modal /> */}
        <Switch>
          {/* <Route path="/stats">
            <StatsPage />
          </Route> */}
          <Route path="/stats">
            <DepartmentPage />
          </Route>
          {/* <Route path="/Emergency">
            <DepartmentPage />
          </Route> */}
          <Route path="/notification">
            <NotificationPage />
          </Route>
          <Route path="/schedule">
            <SchedulePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
