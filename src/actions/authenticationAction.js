import axios from 'axios'
import {authConstants} from  '../constants'

export const authenticationRequest = () =>{
    return{
        type: authConstants.AUTHENTICATION_REQUEST
    }
}

export const authenticationSuccess = data =>{
    return {
        type:authConstants.AUTHENTICATION_SUCCESS,
        payload:data,
    }
}

export const authenticationFailure = error =>{
    return {
        type:authConstants.AUTHENTICATION_FAILURE,
        payload:error
    }
}

export const login = () =>{
    return(dispatch) =>{
        dispatch(authenticationRequest)
        axios({
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            url: 'https://reqres.in/api/login',
            data: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
        }).then(response =>{
            const data = response.data;
            dispatch(authenticationSuccess(data))
        }).catch (error => {
            const errorMessage= error.message || error.statusText;
            dispatch(authenticationFailure(errorMessage))
        })
    }
}

export const logout = () =>{
    return {
        type:authConstants.LOGOUT
    }
}


export const register = () =>{
    return(dispatch) =>{
        dispatch(authenticationRequest)
        axios({
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            url: 'https://reqres.in/api/register',
            data: {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }
        }).then(response =>{
            const data = response.data;
            dispatch(authenticationSuccess(data))
        }).catch (error => {
            const errorMessage= error.message || error.statusText;
            dispatch(authenticationFailure(errorMessage))
        })
    }    
}
