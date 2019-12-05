import * as types from '../../type';
import axios from 'axios';


/*Đặt vé */
export const setTicket=(ticket,token)=>{

    return dispatch =>{
        axios.post(types.URL_API+`/ve`,ticket,{headers:{
            'Authorization':token
          }})
        .then(res => {
            dispatch({ type:types.PUT_TICKET_SUCCESS});
        })
        .catch(err =>{
            dispatch({ type:types.PUT_TICKET_FAILED });
        });
    }
}


export const saveTicket=(ticket)=>{
    return {
        type:types.SAVE_TICKET,
        payload: ticket
    }
}