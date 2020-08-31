import {authConstants} from  '../constants'

const initialState={
    isAuthenticated: false,
    id:null,
    token: '',
    error:''
}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case authConstants.AUTHENTICATION_REQUEST:
            return {
                ...state,
                isAuthenticated:true,
            }
        case authConstants.AUTHENTICATION_SUCCESS:
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            let idd= (action.payload.id === 'undefined') ? null:action.payload.id;
            return{
                isAuthenticated:true,
                id:idd,
                token:action.payload.token,
                error:''
            }
        case authConstants.AUTHENTICATION_FAILURE:
            return {
                isAuthenticated:false,
                id:null,
                token:'',
                error:action.payload
            }
        case authConstants.LOGOUT:
            localStorage.clear();
            return {
              ...state,
              isAuthenticated: false,
              id:null,
              token:'',
              error:''
            };
        default:
            return state;
    }    
}

export default reducer;