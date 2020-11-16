import React, { useState } from 'react';

// Assets
import ventilation from '../../svg/ventilation.svg';
import wheelchair from '../../svg/wheelchair.svg';

// Style
import './Equipment.scss';


const Equipment = ({name, type, lastDisinfection}) => {
  return (
    <div className="equipment-card">
      <div className="card-container">
        <div className="equipment-name">
          <h4>{name}</h4>
        </div>
        <div className="disinfection">
          <div className="disinfection-state">
            <h5>Disinfected</h5>
          </div>
          <div className="disinfection-timestamp">
            <p>Oct 28, 2020 9:06 AM</p>
          </div>
        </div>
        <div className="equipment-image">
          <img src={ventilation} alt="image"/>
        </div>
      </div>
    </div>
 )
}

export default Equipment;