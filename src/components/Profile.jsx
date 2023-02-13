import React from "react";
import { useState } from "react";
import "../index.css";
import "./Profile.css"

export default function Profile() {
  const [loginStatus, setLoginStatus] = useState(0)


  return (
    <>
      {loginStatus === 0 && (
        <main>
          <section className="login-container">
            <h1 className="register-title">Register!</h1>
            <form>
              <div>
                <input type="text" className="login-input" placeholder="Name" />
              </div>
              <div>
                <input type="text" className="login-input" placeholder="Email" />
              </div>
              <input type="text" className="login-input" placeholder="Password" />
              <div>
                <input type="text" className="login-input" placeholder="Confirm Password" />
              </div>
              <div>
                <button className="login-button" onClick={() => setLoginStatus(1)}>Register</button>
              </div>
            </form>
            <u className="hyper-link" onClick={() => setLoginStatus(1)}>Already registered? Click here to Login!</u>
          </section>
        </main>
      )}

      {loginStatus === 1 && (
        <main>
          <section className="login-container">
            <h1 className="login-title">Login!</h1>
            <form>
              <div>
                <input type="text" className="login-input" placeholder="Email" />
              </div>
              <input type="password" className="login-input" placeholder="Password" />
              <div>
                <button className="login-button" onClick={() => setLoginStatus(2)}>Login</button>
              </div>
            </form>
            <u className="hyper-link" onClick={() => setLoginStatus(0)}>Click here to register!</u>
          </section>
        </main>
      )}

      {loginStatus === 2 && (
        <main className='Root'>
          <section className='container'>
            <ul>
              <h3>David Figueroa</h3>
              <p>Email: davidfig@kiss.com</p>
              <p>Member since: 2023</p>
            </ul>
          </section>
          <button className="logout-button" onClick={() => setLoginStatus(1)}>Logout</button>
        </main>
      )}

    </>
  );
}