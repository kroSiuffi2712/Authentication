import React, {useState} from 'react'
import {connect} from 'react-redux'
import { Link, Redirect} from 'react-router-dom';

import  '../../styles/loginStyle.css'
import {login} from '../../actions/authenticationAction'

const Login = ({stateAuthentication, login}) =>{

  const initialState = {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
  };

  const [data, setData] = useState(initialState);
  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

   if (stateAuthentication.isAuthenticated) {
    return <Redirect to='/adminPage' />;
  }

    return (
        <div className="login-container">
            <div id="login" className="input-group">
              <input className="input-field"
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={handleInputChange}
                placeholder="Email"
              />
              <input className="input-field"
                id="password"
                name="password"
                type="password"
                value={data.password}
                onChange={handleInputChange}
                placeholder="Password"
              />
              <button className="submit-btn" onClick={()=>login()}> Sign In</button>
              <Link to="/register" className="msg-link">Don't have an account?</Link>
              { stateAuthentication.error &&<div className="msg-error">The username or password provided were incorrect!</div> }
            </div>
        </div>
);

}

const mapStateToProps = state =>{
    return {
      stateAuthentication:state.authentication
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        login : () =>dispatch(login())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);