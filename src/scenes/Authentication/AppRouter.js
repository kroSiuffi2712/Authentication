import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import Auth from '../../components/Authentication/Authentication'
import Admin from '../../components/Admin/Admin'
import PrivateRoute from "./PrivateRoute";
import {authConstants} from  '../../constants';

const AppRouter= () =>{

    const dispatch = useDispatch();

    
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token') || null)
    
        if(token){
          dispatch({
            type: authConstants.AUTHENTICATION_SUCCESS,
            payload: {
              token
            }
          },[])
        }
    })

    return(
        <Router>
          <div>
              <Link to="/"></Link>
                  <Route path="/" exact component={Auth} />
                  <Route path="/auth" exact component={Auth} />
                  <PrivateRoute path="/adminPage/" component={Admin} />
          </div>
        </Router>
        );
}

export default AppRouter;