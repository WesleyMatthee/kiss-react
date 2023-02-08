
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import SwipeButton from 'react-swipezor';
import  ReactDom  from 'react-dom';
import React, { useState } from 'react';
import './PhoneModal.css';


export default function PhoneModal({ open, onClose }){
  const [reset, setReset] = useState(0);

  if(!open) return null;
  

  return ReactDom.createPortal(
    <>
      <div className='dark-overlay'>
        <div className='phone-modal'>
          <FontAwesomeIcon icon={faCircleXmark} onClick={onClose} className="close-modal"/>
          <SwipeButton 
            mainText="Swipe me" 
            overlayText="S I K E" 
            onSwipeDone={function () {
            console.log("Done!");
           }} 
  reset={reset}
/>
        </div>
        <button onClick={() => {
  setReset(counter => counter + 1)
}}
>
  Reset
</button>
       </div>

    </>,
    document.getElementById('portal')
  )

} 