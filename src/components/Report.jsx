import React from "react";
import "../index.css";
import "./Report.css"
import { useNavigate } from "react-router-dom";

export default function Report(props) {
  const navigate = useNavigate();


  return (
    <>
      <main className='Root'>
        <section className='histoy-container'>
          <h1 className="History-title">Incidents History </h1>
          <ul className='history-button'>
            <button className='history' onClick={() => { navigate('/vital')}}>
            <h3>CPR</h3>
            <nobr>Location: Toronto</nobr>
            <p>Date: 2023-02-16</p>
            </button>
            <button className='history' onClick={() => { navigate('/vital')}}>
            <h3>Choking</h3>
            <nobr>Location: Hamilton</nobr>
            <p>Date: 2023-01-16</p>
            </button>
            <button className='history' onClick={() => { navigate('/vital')}}>
            <h3>CPR</h3>
            <nobr>Location: Oakville</nobr>
            <p>Date: 2023-02-01</p>
            </button>
          </ul>
        </section>
      </main>
    </>
  );
}
