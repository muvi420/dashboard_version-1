import React from 'react';

// Components
import Floor from './Floor';

// Style
import './Floor.scss';

const MainContent = ({ activeFloors, activeList, sensorGroup }) => {
  return (
    <div className="main_content">
      {activeFloors && activeFloors.map((e) => {
        return (
          <Floor key={e} level={e} allSlots={activeList} sensorGroup={sensorGroup} />
        )
      })}
    </div>
)
}

export default MainContent;
