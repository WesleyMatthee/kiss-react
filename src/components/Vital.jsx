import React from "react";
import "../index.css";
import { useState } from "react";

export default function Report(props) {
  const [selectIncident, setSelectIncident] = useState(false);


  return (
    <>
      <main className='Root'>
        <section className='container'>
          <ul className='emergencies-button'>
            <h1>Incidents</h1>
            <tr>
            <th>Type:</th>
            <p> CPR </p>
            </tr>
            <tr>
            <th>Date:</th>
            <p>2023-02-16</p>
            </tr>
          </ul>
        </section>
      </main>
    </>
  );
}