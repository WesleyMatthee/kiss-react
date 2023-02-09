import React from "react";
import { useEffect } from "react";


export default function Timer ({ isActive, seconds, setSeconds }) {
  
    useEffect(() => {
      let timer = null;
      if(isActive){
        timer = setInterval(() => {
          setSeconds((seconds) => seconds + 1);
        }, 1000);
      }
      return () => {
        clearInterval(timer);
      };
    },[isActive, setSeconds]);
    return (
      <div>
        {seconds}
      </div>
    );
  }; 

 