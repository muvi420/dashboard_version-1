// Libraries
import React, {useState} from 'react';
// import events from './events';
import {Calendar, momentLocalizer, Views} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import _ from 'lodash';

// Styles
import './ScheduleCalendar.scss';

const localizer = momentLocalizer(moment);

const ScheduleCalendar = (props) => {

  const [calendarEvents, setCalendarEvents] = useState(props.calendarEvents);

  const [dayLayoutAlgorithm, setDayLayoutAlgorithm] = useState('no-overlap');

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');

    if (title) {
      setCalendarEvents([...calendarEvents, {start, end, title, }])
    }
  }
  
  return (
    <div className="schedule_calendar">
      <Calendar
        selectable
        localizer={localizer}
        events={props.calendarEvents}
        defaultView={Views.WEEK}
        views={{ week: true, day: true }}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
        scrollToTime={new Date(1970, 1, 1, 6)}
        defaultDate={new Date()}
        onSelectEvent={event => alert(event.title)}
        onSelectSlot={handleSelect}
        dayLayoutAlgorithm={dayLayoutAlgorithm}
      />
  </div>
  )
};

export default ScheduleCalendar;
