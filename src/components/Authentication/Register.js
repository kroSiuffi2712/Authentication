import React, {useState} from 'react'
import {connect} from 'react-redux'
import { register } from '../../actions/authenticationAction'
import { Redirect} from 'react-router-dom';

import '../../styles/loginStyle.css';


const Register = ({stateAuthentication,register}) =>{

    const initialState = {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
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
        <div className="input-container">
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
              <button className="submit-btn" onClick={()=>register()}> Sign In</button>
            </div>
        </div>
    );

}

const mapStateToProps = state =>{
    return{
      stateAuthentication:state.authentication
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        register : ()=> dispatch(register())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)