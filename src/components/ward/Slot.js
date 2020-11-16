import React, { useEffect, useState } from 'react';
import moment from 'moment';
// Assets
// import ventilation from '../../svg/ventilation.svg';
// import wheelchair from '../../svg/wheelchair.svg';

// Style
import './Slot.scss';

const Slot = ({ name, sensorGroupID, type, lastDisinfection, sensorGroup }) => {
  const [sensor, setSensor] = useState([]);
  const [lastActivatedTime, setLastActivatedTime] = useState([]);
  const [nextActivatedTime, setNextActivatedTime] = useState([]);
  const [timeDiff, setTimeDiff] = useState();


  // console.log("today", moment("2020-11-09 9:00").format('LLL'));
  // console.log("test",moment('2020-11-09 9:00').add(24, 'hours').format('LLL'));

  useEffect(() => {
    // Filter corresponding rooms/equipment of a specific floor
    if (sensorGroup) {
      console.log("sensorGroup", sensorGroup);

      const temp = sensorGroup.filter((e) => e.sensorGroupID === sensorGroupID);

      if (temp.length) {
        setSensor(temp);
        setLastActivatedTime(moment(temp[0].lastActivatedStartTime).format('LLL'));
        setNextActivatedTime(moment(temp[0].lastActivatedStartTime).add(24, 'hours').format('LLL'));
      }
    }
  }, [sensorGroup]);

  useEffect(() => {
    // if(nextActivatedTime)
  },[lastActivatedTime, nextActivatedTime])

  return (
    <div className="slot-card">
      <div className="card-container">
        <div className="slot-name">
          <h3>{name}</h3>
        </div>
        <div className="disinfection">
          <h4>Disinfection</h4>
          <div className="disinfection-time">
            <div className="disinfection-text">
              <h5>Last Time:</h5>
            </div>
            <div className="disinfection-timestamp">
              <p>{sensor.length ? lastActivatedTime : 'undefined'}</p>
            </div>
          </div>
          <div className="disinfection-time">
            <div className="disinfection-text">
              <h5>Next Time:</h5>
            </div>
            <div className="disinfection-timestamp">
              <p>{sensor.length ? nextActivatedTime : 'undefined'}</p>
            </div>
          </div>
          
        </div>
        <div className="slot-image">
          {/* <img src={ventilation} alt="image"/> */}
        </div>
      </div>
    </div>
 )
}

export default Slot;