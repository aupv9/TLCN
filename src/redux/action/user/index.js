import * as types from '../../type';
import axios from 'axios';


/* Sign up user*/
export const  signup = (user)=>{

    return dispatch =>{
       
        axios.post(
            types.URL_API+`/sign-up`,
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
            types.URL_API+`/login`,
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
/**Set JWT  */
export const setTokenSession= (token)=>{
        return{
        type:types.SET_TOKEN,
        payload:token
    }
}
/**Del JWT */
export const delTokenSession= ()=>{
    return{
        type:types.DEL_TOKEN
    }
}
/*Set location start */
export const setStartLocation=(location)=>{
    return{
        type:types.SET_START_LOCATION,
        payload:location
    }
}
/*Set location end*/
export const setEndLocation=(location)=>{
    return{
        type:types.SET_END_LOCATION,
        payload:location
    }
}
