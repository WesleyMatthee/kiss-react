import React, { useState } from "react";
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import PhoneModal from "./PhoneModal";
import { useState } from 'react';


export default function Footer(props){
  const [isOpen, setIsOpen] = useState(false) 
  const navigate = useNavigate();

  return (
    <>
      <footer className="footer">
       <div>
         <FontAwesomeIcon icon={faHouse} onClick={() => navigate("/")} className="footer-icon"/>
         <FontAwesomeIcon icon={faChartSimple} className="footer-icon"/>
         <FontAwesomeIcon icon={faUser} className="footer-icon"/>
         <FontAwesomeIcon icon={faPhone} onClick={ () => PhoneModal } className="footer-phone"/>
       </div>
      </footer>
        <div>
         <PhoneModal>
            Call 911
         </PhoneModal>
        </div>
    </>

  )
}