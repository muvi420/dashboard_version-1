import React from 'react';
import {
  Link
} from "react-router-dom";

// Assets
import hospital from '../svg/hospital.svg';
import home from '../svg/home.svg';
import bell from '../svg/bell.svg';
import calendar from '../svg/calendar.svg';
import ward from '../svg/ward.svg';
import barchart from '../svg/bar-chart.svg';

// Style
import './NavBarComponent.scss';

const NavBarComponent = () => {
  return (
    <div className="navBar">
      <div className="navBar-container">
        <div className="navBar-hearder">
          <h1>Dashboard</h1>
          <div className="header-img">
            <div className="header-img_container">
              <img src={hospital} alt="logo" />
            </div>
          </div>
        </div>
        <div className="navBar-list">
          <ul className="navBar-list_container">
            <li className="navBar-list_item">
              <button className="item-link_btn" type="button">
                <Link to="/">
                  <div className="nav-item_icon">
                    <img src={home} alt="" />
                  </div>
                  <h4 className="nav-item_text">Home</h4>
                </Link>
              </button>
            </li>
            <li className="navBar-list_item">
              <button className="item-link_btn" type="button">
                <Link to="/notification">
                  <div className="nav-item_icon">
                    <img src={bell} alt="" />
                  </div>
                  <h4 className="nav-item_text">Notifications</h4>
                </Link>
              </button>
            </li>
            <li className="navBar-list_item">
              <button className="item-link_btn" type="button">
                <Link to="/schedule">
                  <div className="nav-item_icon">
                    <img src={calendar} alt="" />
                  </div>
                  <h4 className="nav-item_text">Schedule</h4>
                </Link>
              </button>
            </li>
            <li className="navBar-list_item">
              <button className="item-link_btn" type="button">
                <Link to="/stats">
                  <div className="nav-item_icon">
                    <img src={ward} alt="" />
                  </div>
                  <h4 className="nav-item_text">Stats</h4>
                </Link>
              </button>
            </li>
            <li className="navBar-list_item">
              <button className="item-link_btn" type="button">
                <Link to="/">
                  <div className="nav-item_icon">
                    <img src={barchart} alt="" />
                  </div>
                  <h4 className="nav-item_text">Analytics</h4>
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBarComponent;