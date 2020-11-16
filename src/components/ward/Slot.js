import React, { useEffect, useState } from 'react';
import moment from 'moment';
// Assets
// import ventilation from '../../svg/ventilation.svg';
// import wheelchair from '../../svg/wheelchair.svg';

// Style
import './Slot.scss';

const Slot = ({ name, disinfectionFreq, sensorGroupID, type, lastDisinfection, sensorGroup }) => {
  const [sensor, setSensor] = useState([]);
  const [lastActivatedTime, setLastActivatedTime] = useState([]);
  const [nextActivatedTime, setNextActivatedTime] = useState([]);
  const [displayColor, setDisplayColor] = useState();
  const [disinfectionStatus, setDisinfectionStatus] = useState();


  const a = moment("2020-11-09 9:00");
  const b = moment('2020-11-0 0:00 AM').add(24, 'hours');
  const c = moment();
  // console.log("today", a);
  // console.log("tomorrow", b); 
  // console.log("c", c);
  // console.log(c.diff(b, "hours"));
  

  useEffect(() => {
    // Filter corresponding rooms/equipment of a specific floor
    if (sensorGroup) {

      const temp = sensorGroup.filter((e) => e.sensorGroupID === sensorGroupID);

      if (temp.length) {
        setSensor(temp);
        setLastActivatedTime(moment(temp[0].lastActivatedStartTime).format('LLL'));
        setNextActivatedTime(moment(temp[0].lastActivatedStartTime).add(disinfectionFreq, 'hours').format('LLL'));
      }
    }
  }, [sensorGroup]);

  // console.log('nextnext', nextActivatedTime);
  useEffect(() => {
    const current = moment();
    const diff = current.diff(nextActivatedTime, "hours");
    if ( diff < 0) {
      setDisplayColor('yellow');
      setDisinfectionStatus('Wainting for disinfection...');
    } else if (diff === 0) {
      setDisplayColor('green');
      setDisinfectionStatus('Disinfected.');
    } else if (diff > 0 && diff <= 3) {
      setDisplayColor('orange');
      setDisinfectionStatus('Alert! Please disinfect ASAP!');
    } else {
      setDisplayColor('red');
      setDisinfectionStatus(`Overdue about ${diff} hours!!`);
    }
    // if(nextActivatedTime)
  },[lastActivatedTime, nextActivatedTime])

  return (
    <div className="slot-card">
      <div className={`card-container ${displayColor}`}>
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
        <div className="disinfection-status">
          {disinfectionStatus}
        </div>
      </div>
    </div>
 )
}

export default Slot;