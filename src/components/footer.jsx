import React from "react";
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";


export default function Footer(props){
const navigate = useNavigate();
  return (

      <footer className="footer">
       <div>
       <FontAwesomeIcon icon={faHouse} onClick={() => navigate("/")} className="footer-icon"/>
       <FontAwesomeIcon icon={faChartSimple} className="footer-icon"/>
       <FontAwesomeIcon icon={faUser} className="footer-icon"/>
       <FontAwesomeIcon icon={faPhone} className="footer-phone"/>
       </div>
      </footer>

  )
}