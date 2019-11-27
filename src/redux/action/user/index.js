import * as types from '../../type';
import axios from 'axios';





export const  signup = (user)=>{
    return dispatch =>{
     
        axios.post(
            types.URL_API+`/sign-up`,user
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
