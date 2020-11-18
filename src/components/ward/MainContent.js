import React from 'react';

// Components
import Floor from './Floor';

// Style
import './MainContent.scss';

const MainContent = ({ type, activeFloors, activeList, sensorGroup }) => {
  const EquipmentType = ['Ventilator', 'Wheelchair', 'IV Pole'];

  return (
    <div className="main_content">
      <div className={`dropdown ${type === 'Equipment' ? 'show': ''}`}>
        <button className="dropbtn">Equipment Type</button>
        <div className="dropdown-content">
          {EquipmentType.map((type) => {
            return (
              <button className="dropitem">{type}</button>
            )
          })
          }
        </div>
      </div>
      {activeFloors && activeFloors.map((e) => {
        return (
          <Floor key={e} level={e} allSlots={activeList} sensorGroup={sensorGroup} />
        )
      })}
    </div>
)
}

export default MainContent;
