import './nav.css'
import React from "react";
import Timer from '../Timer' 

export default function Nav({isActive, seconds, setSeconds}) {

    
      return (
        <nav>
        <div className='nav-bar'>
          <img alt='White Logo' className='white-logo' src='/images/Kiss-Logo-White.png'></img>
          <p>HOME PAGE</p>
        <output className='timer'>
          {isActive && 
          <Timer
          isActive={isActive}
          seconds={seconds}
          setSeconds={setSeconds}
          />}</output>
        </div>
    </nav>
    )
    
  
}