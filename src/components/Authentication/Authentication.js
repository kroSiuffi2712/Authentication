import React, {useState} from 'react'

import Login from './Login'
import Register from './Register'

import '../../styles/loginStyle.css'


const Authentication = () =>{
    const [sw, setSw] = useState(true);

    return (
      <main className="main-section">
      <div className="form-box">
          <div className="button-box">
              <div id="btn" className={sw ? "btn-login":"btn-register"}></div>
                <button type="button" className="toggle-btn" onClick={() => setSw(true)}>Log In</button>
                <button type="button" className="toggle-btn"  onClick={() => setSw(false)}>Register</button>
              </div>
              {sw ? <Login /> : <Register />}
          </div>
      </main>
    );
}

export default Authentication;