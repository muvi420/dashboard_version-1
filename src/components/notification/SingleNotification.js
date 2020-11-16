import React, { useEffect, useState } from 'react';

// Assets
import checked from '../../svg/checked.svg';

// Style
import './SingleNotification.scss';

const SingleNotification = () => {
  return (
    <div className="single-notification">
      <div className="notification-inner">
        <div className="notification-left">
          <div className="status-icon">
            <img src={checked} alt=""/>
          </div>
          <div className="status">
            <div className="item-type">Room 2</div>
            <div className="item-status">Disinfection process complete</div>
          </div>
        </div>
        <div className="schedule-time">10:55 AM</div>
      </div>
    </div>
  )
}

export default SingleNotification;