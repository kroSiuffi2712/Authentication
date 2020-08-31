import React from 'react'
import {useDispatch} from 'react-redux';

import {logout} from '../../actions/authenticationAction'

const Header = () =>{
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logout());
      }

    return (
        <header className="sticky">
            <nav id="navbar">
                <div className="ul-container">
                    <div className="user"><button className="user-button" onClick={logOut}><i className="fa fa-user-circle" aria-hidden="true"></i></button></div>
                </div>
            </nav>
        </header>
    );
}

export default Header;