import React, {useState} from 'react';

// Components


// Style
import './Header.scss';

const ScheduleComponent = (props) => {
  return (
    <div className="schedule_tab">
      <div className="schedule_tab_container">
        <ul className="tab_wrapper">
          {props.tabList && props.tabList.map((tab) => {
            return (
              <li className={`tab_item ${props.selectedTab ===  tab ? 'tab_clicked' : ''}`}>
                <button
                  onClick={() => {
                    props.setTabDisplay(tab);
                  }}
                  type="button">
                  {tab}
                </button>
            </li>
           )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ScheduleComponent;