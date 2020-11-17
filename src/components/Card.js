import React from 'react';

import './Card.scss';


const Card = (props) => {
  return (
    <div className="card">
      <button
        type="button"
        className={`card-inner ${props.title === props.click ? 'clicked' : ''}`}
        onClick={() => {
          props.setClickFunc(props.title);
        }}
      >
        <h3>{props.title}</h3>
      </button>
    </div>
 )
}

export default Card;