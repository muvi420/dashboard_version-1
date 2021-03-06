import React from 'react';
import moment from 'moment';
// Components
import Header from '../Header';
import DailyNotify from './DailyNotify';

// Style
import './NotificationComponent.scss';

const NotificationComponent = () => {
  const today = moment().format('DD MMMM YYYY');
  const tomorrow = moment().add(1, 'days').format('DD MMMM YYYY').toString();
  const yesterday = moment().subtract(1, 'days').startOf('day').format('DD MMMM YYYY').toString();

  const notificationDate = [{currentDay: "Tomorrow", date: tomorrow},{currentDay: "Today", date: today}, {currentDay: "Yesterday", date: yesterday}]
  return (
    <div className="notification">
      <div className="notification-container">
        <div className="header">
          <Header header="Notification Center" />
        </div>
        <div className="content-inner">
          {notificationDate.map((e) => {
            return(<DailyNotify currentDay={e.currentDay} date={e.date} />)

          })}
        </div>
      </div>
    </div>
  )
}

export default NotificationComponent;