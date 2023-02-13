import React from "react";
import "../index.css";
import "./Profile.css"

export default function Profile() {


  return (
    <>
      <main className='Root'>
        <section className='container'>
          <ul>
            <h3>David Figueroa</h3>
            <p>Email: davidfig@kiss.com</p>
            <p>Member since: 2023</p>
          </ul>
        </section>

        <button className="logout-button" >Logout</button>
      </main>
    </>
  );
}