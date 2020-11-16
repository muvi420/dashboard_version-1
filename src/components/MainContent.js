import React, {useEffect, useState} from 'react';
import {
  Link
} from "react-router-dom";

// Components
import Header from './Header';
import Card from './Card';

// Style
import './MainContent.scss';


const MainContent = (props) => {
  const [clickBtn, setClickBtn] = useState('');
  const [route, setRoute] = useState('');

  const departments = ["Emergency", "ICU", "Oncology"];

  const setClickFunc = (button) => {
    setClickBtn(button);
  }

  useEffect(() => {
    setRoute(clickBtn);
  },[clickBtn])

  return (
    <div className="main-content">
      <div className="content-container">
        <div className="content-header">
          <Header header="Department" />
        </div>
        <div className="content-inner">
          {departments.map((e) => { 
              return (
                <Card key={e} title={e} click={clickBtn} setClickFunc={setClickFunc} />
              )
          })}
        </div>
          <button
            className="nav-btn"
            type="button"
            onClick={() => setRoute(clickBtn)}
          >
          <Link to={`/${route}`}>
            Next
          </Link>
          </button>
      </div>
    </div>
 )
}

export default MainContent;