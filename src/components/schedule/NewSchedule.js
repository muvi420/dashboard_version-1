import React, {useState, useEffect} from 'react';

// Components
import DatePickerComponent from './DatePickerComponent';

// Style
import './NewSchedule.scss';
import "react-datepicker/dist/react-datepicker.css";

const NewSchedule = (props) => {
  const [title, setTitle] = useState();
  const [target, setTarget] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [alertDisplay, setAlertDisplay] = useState();


  const setStartTimeFunc = (startTime) => {
    setStartTime(startTime);
  }

  const setEndTimeFunc = (endTime) => {
    setEndTime(endTime);
  }

  const handleSubmit = (event) => {
    props.setEventFunc(title, target, startTime, endTime);
    setAlertDisplay(true);
    setTitle('');
    setTarget('');
    setStartTime(new Date());
    setEndTime(new Date());
    event.preventDefault();
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlertDisplay(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [alertDisplay]);
  
  return (
    <div className="new_schedule">
      <div className="new_schedule_container">
        <div className="schedule_form">
          <form className="form_wrapper" onSubmit={(event) => handleSubmit(event)}>
            <label>
              Title:
              <div className="row">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)} />
              </div>
            </label>
            <label>
              Room / Equipment:
              <div className="row">
                <input
                  type="text"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)} 
                />
              </div>
            </label>
            <label>
              Time Start:
              <div className="row">
                <DatePickerComponent
                  // setStartTimeFunc={setStartTimeFunc}
                  callbackFunc={(time) => {
                    setStartTimeFunc(time);
                  }}
                />
              </div>
            </label>
            <label>
              Time End:
              <div className="row">
                <DatePickerComponent
                  setEndTimeFunc={setEndTimeFunc}
                  callbackFunc={(time) => {
                    setEndTimeFunc(time);
                  }}
                />
              </div>
            </label>
            {/* <label>
              Status:
              <div className="row">
                <input type="text"  />
              </div>
            </label> */}
            <div className={`${alertDisplay ? "alert_show" : "alert_hide"}`}>Schedule Created!</div>
              <input type="submit" value="Submit" className="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}



export default NewSchedule;