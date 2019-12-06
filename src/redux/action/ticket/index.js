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

/*Action send mail  */
export const sendMailAPI=(mail,token)=>{
    return dispatch =>{
        console.log(mail);
        console.log(token);
        axios.post(types.URL_API+`/sendEmail`,mail,{headers:{
            'Authorization':token
          }})
        .then(res =>{
            dispatch({ 
                type:types.SEND_MAIL_SUCESS
            })
        })
        .catch(err =>{
            console.log(err);
            dispatch({ 
                type:types.SEND_MAIL_FAIL
            })
        })
    }
}