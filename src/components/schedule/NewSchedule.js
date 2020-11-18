import React, {useState, useEffect} from 'react';
import axios from 'axios';
// Components
import DatePickerComponent from './DatePickerComponent';

// Style
import './NewSchedule.scss';
import "react-datepicker/dist/react-datepicker.css";

const apiPoint = 'https://e86gqbslqe.execute-api.ap-southeast-2.amazonaws.com/fake_api_stage1/schedule';

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

  async function postSchedule() {
      try {
        const res = await axios({
          url: apiPoint,
          method: 'post',
          headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            "Content-Type": "application/json",
          },
          data: {
            title,
            target,
            startTime,
            endTime
          }
        });

      } catch (error) {
        console.log(error);
      }
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
          <form className="form_wrapper" >
            <label>
              Title:
              <div className="row">
                <input
                  type="text"
                  value={title || ''}
                  onChange={(e) => setTitle(e.target.value)} />
              </div>
            </label>
            <label>
              Room / Equipment:
              <div className="row">
                <input
                  type="text"
                  value={target || ''}
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
            <div className={`${alertDisplay ? "alert_show" : "alert_hide"}`}>Schedule Created!</div>
            <button
              type="button"
              className="submit"
              onClick={(event) => {
                postSchedule();
                handleSubmit(event);
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewSchedule;