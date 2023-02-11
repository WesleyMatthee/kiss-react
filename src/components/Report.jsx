import React from "react";
import '../index.css';
import UserHistory from "./UserHistory";

export default function Report(props) {
  return (
<>
  <UserHistory setUserHistory={props.setUserHistory} userHistory={props.userHistory}/>
    
    </>
  );
}
