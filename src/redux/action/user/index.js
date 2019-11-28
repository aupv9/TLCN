import * as types from '../../type';
import axios from 'axios';


/* Sign up user*/
export const  signup = (user)=>{

    return dispatch =>{
       
        axios.post(
            types.URL_API_LOCAL+`/sign-up`,
            user
        )
        .then(res =>{
            dispatch({
                type:types.SIGN_UP_SUCCESS
            })
        })
        .catch(err =>{
            console.log(err);
            dispatch({
                type:types.SIGN_UP_FAILED
            })
        })
    }
}

/*Sign In */
export const signIn = (user)=>{
    return dispatch =>{
        axios.post(
            types.URL_API_LOCAL+`/login`,
            user
        )
        .then(res =>{
            dispatch({ 
                type:types.LOGIN_SUCCESS,
                payload:res.data
            })
        })
        .catch(err =>{
            dispatch({ 
                type:types.LOGIN_FAILED
            })
        })
    }
}

export const setTokenSession= (token)=>{
    console.log(token);
        return{
        type:types.SET_TOKEN,
        payload:token
    }
}
export const delTokenSession= ()=>{
    return{
        type:types.DEL_TOKEN
    }
}
