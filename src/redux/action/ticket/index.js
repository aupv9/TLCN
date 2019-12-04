import * as types from '../../type';
import axios from 'axios';


/*Đặt vé */
export const setTicket=(ticket,token)=>{

    return dispatch =>{
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': token
          }
        
        axios.post();
    }
}


export const saveTicket=(ticket)=>{
    return {
        type:types.SAVE_TICKET,
        payload: ticket
    }
}