import './Home.css';
import { useNavigate } from 'react-router-dom'
import React from 'react';


export default function Home() {
  const navigate = useNavigate();

  return (
    <main className='Root'>

  
    <section className='container'>
      <ul className='emergencies-button'>
        <button type="button" onClick={() => navigate('/CPR')}>CPR</button>
        <button type="button" onClick={() => navigate('/choking')}>Choking</button>
        <button type="button">Bleeding</button>
        <button type="button">Anaphilylaxis</button>
        <button type="button">Other</button>
      </ul>
    </section>
    
    
   
    

  </main>
  );
}


