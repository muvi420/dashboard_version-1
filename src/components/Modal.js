import React, { useState } from 'react';
import './Modal.scss';
// Components
import Notification from './Notification';


const Modal = () => {
  const [open, setOpen] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setOpen(!open)
  //   }, 2000)
  // }, [open])

  return (
    <div className={`modal ${open ? 'open' : ''}`}>
      <Notification />
    </div>
  )
}

export default Modal;