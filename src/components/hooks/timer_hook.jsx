import { useEffect, useState } from "react";

export default function Timer () {
    const [isActive, setIsActive] = useState(false);
    const [seconds, setSeconds] = useState(0);
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
    });
    return (
      <div>
        {seconds}
        <br />
        <button onClick={()=>{
          setIsActive(true);
        }}> Start </button>
        <button onClick={()=>{
          setIsActive(false);
        }}> Stop </button>
      </div>
    );
  }; 

 