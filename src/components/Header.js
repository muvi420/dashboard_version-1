import React, {useEffect, useState} from 'react';

// Style
import './Header.scss';

const Header = ({header}) => {
  return (
    <div className="page-header">
      <h2>{header}</h2>  
    </div>
 )
}

export default Header;