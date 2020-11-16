import React, { useState } from 'react';

// Components
import Equipment from './Equipment';

// Style
import './RoomCard.scss';


const RoomCard = (props) => {
  return (
    <div className="room-card">
      <div className="card-inner">
        <div className="room-card_header">
          <h2 className="room-number">1</h2>
          <div className="room-type">
            <p>Room</p>
          </div>
        </div>
        <div className="room-card_content">
          {/* <Equipment />
          <Equipment /> */}

        </div>
      </div>
    </div>
 )
}

export default RoomCard;