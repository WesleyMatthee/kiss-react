import React from "react";
import './footer.css'
import { useNavigate } from "react-router-dom";

export default function Footer(props){
  const navigate = useNavigate();

  return (
    <footer className="footer">
    <button onClick={() => navigate('/')}>Testing footer</button>
    </footer>
  )
}