import React from "react";
import { useEffect } from "react";


export default function Timer ({ isActive, seconds, setSeconds }) {
  
    useEffect(() => {
      let timer = null;
      if(isActive){
        timer = setInterval(() => {
          setSeconds((seconds) => seconds + 1);
        }, 1000);
      } else if (!isActive && seconds !== 0) {
        clearInterval(timer);
      }
      return () => clearInterval(timer);
    }, [isActive, setSeconds, seconds]);

    return (
      <div>
        {seconds}s
      </div>
    );
  }; 

 