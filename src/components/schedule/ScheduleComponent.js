import { set } from 'lodash';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';


// Components
import events from './events';
import Header from './Header';
import ScheduleCalendar from './ScheduleCalendar';
import NewSchedule from './NewSchedule';


// Style
import './ScheduleComponent.scss';

const ScheduleComponent = () => {

  // const tabList = [
  //   {tab: "Schedule List", clicked: true},
  //   {tab: "Create New Schedule", clicked: false},
  //   { tab: "Schedule Calendar", clicked: false }
  // ];
  const [calendarEvents, setCalendarEvents] = useState(_.cloneDeep(events));
  
  const tabList = [
    // "Schedule List", 
    "Create New Schedule",
    "Schedule Calendar"
  ];
  const [tab, setTab] = useState();
  const [scheduleCalendar, setScheduleCalendar] = useState();
  const [newSchedule, setNewSchedule] = useState(true);

  const [title, setTitle] = useState();
  const [target, setTarget] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  const setTabDisplay = (tab) => {
    if (tab) setTab(tab);
  }

  useEffect(() => {
    if (tab === "Create New Schedule") {
      setNewSchedule(true);
      setScheduleCalendar(false);
    } else if (tab === "Schedule Calendar") {
      setScheduleCalendar(true);
      setNewSchedule(false);
    }
  }, [tab])

  const setEvent = (title, target, startTime, endTime) => {
    setTitle(title);
    setTarget(target);
    setStartTime(startTime);
    setEndTime(endTime);
    setCalendarEvents([...calendarEvents, {"title" : title, "start": startTime, "end": endTime}])

  }

  return (
    <div className="schedule">
      <div className="schedule_container">
        <div className="header">
          <Header tabList={tabList} setTabDisplay={setTabDisplay} selectedTab={tab} />
        </div>
        <div className="schedule_content">
          <div className="schedule_content_wrapper">
            {scheduleCalendar
              ? <ScheduleCalendar tab={tab}
              calendarEvents={calendarEvents}
              />
              : null}
            
            {newSchedule
              ? <NewSchedule
              setEventFunc={setEvent} />
              : null}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScheduleComponent;