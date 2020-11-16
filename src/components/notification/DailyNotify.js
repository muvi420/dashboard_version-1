import React, {useEffect, useState} from 'react';

// Components
import SingleNotification from './SingleNotification';

// Style
import './DailyNotify.scss';

const DailyNotify = ({currentDay, date}) => {

  return (
    <div className="daily-notifaction">
      <div className="daily-container">
        <div className="notification-header">
          <h2>{currentDay}</h2>
          <p>{date}</p>
        </div>
        <div className="notification-list">
          <SingleNotification />
          <SingleNotification />
          <SingleNotification />

        </div>
      </div>
    </div>
 )
}

export default DailyNotify;