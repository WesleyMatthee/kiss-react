import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

export default function Report(props) {
  const navigate = useNavigate();


  return (
    <>
      <main className='Root'>
        <section className='container'>
          <ul className='history-button'>
          <h1>Incidents History: </h1>
            <button className='history' onClick={() => { navigate('/vital')}}>
            <h3>CPR</h3>
            <p>Location: Toronto</p>
            <p>Date: 2023-02-16</p>
            </button>
            <button className='history' onClick={() => { navigate('/vital')}}>
            <h3>Choking</h3>
            <p>Location: Hamilton</p>
            <p>Date: 2023-01-16</p>
            </button>
            <button className='history' onClick={() => { navigate('/vital')}}>
            <h3>CPR</h3>
            <p>Location: Oakville</p>
            <p>Date: 2023-02-01</p>
            </button>
          </ul>
        </section>
      </main>
    </>
  );
}
