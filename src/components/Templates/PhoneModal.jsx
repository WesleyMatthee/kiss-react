
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import  ReactDom  from 'react-dom';
import ReactSwipeButton from 'react-swipe-button';
import { useState } from 'react';
import './PhoneModal.css';
import React from 'react'

export default function PhoneModal({ open, onClose }){
  if(!open) return null;

  return ReactDom.createPortal(
    <>
     <div className='dark-overlay'>
      <div className='phone-modal' >
        <FontAwesomeIcon icon={faCircleXmark} onClick={onClose} className="close-modal"/>
      </div>
     </div>
    </>,
    document.getElementById('portal')
  )

} 