import React, {useEffect, useState} from 'react';

// Components
import Slot from './Slot';

// Style
import './Floor.scss';

const Floor = ({ level, allSlots, sensorGroup }) => {
  const [slots, setSlots] = useState([]);
  
  useEffect(() => {
    // Filter corresponding rooms/equipment of a specific floor
    if (allSlots) {
      const temp = allSlots.filter((e) => e.address.floorNumber === level)
      setSlots(temp);
    }
  }, [allSlots, level]);

  return (
    <div className="floor">
      <div className="floor-container">
        <div className="floor-header">
          <h2>{`Floor ${level}`}</h2>
        </div>
        <div className="floor-content">
          <div className="single_slot">
            {slots.map((slot) => {
              return (
                <Slot
                  key={slot.entityName}
                  name={slot.entityName}
                  disinfectionFreq={slot.disinfectionFreq}
                  sensorGroupID={slot.sensorGroupID}
                  sensorGroup={sensorGroup} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
 )
}

export default Floor;