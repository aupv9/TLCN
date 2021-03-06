import * as types from '../../type';
import axios from 'axios';


/*Đặt vé */
export const setTicket=(ticket,token)=>{

    return dispatch =>{
        axios.post(types.URL_API_LOCAL+`/ve`,ticket,{headers:{
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
        axios.post(types.URL_API_LOCAL+`/sendEmail`,mail,{headers:{
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
/**Tìm vé đã đặt */
export const searchTicket=(id,phone,token)=>{
    return dispatch =>{
        console.log(id);
        console.log(phone);
        console.log(token);
        axios.post(types.URL_API_LOCAL+`/search-ve`,{
            _id:id,
	        sdt:phone
        },{headers:{
            'Authorization':token
          }})
        .then(res =>{
            dispatch({
                type:types.SEARCH_TICKET_SUCCESS,
                payload:res.data
            });
        })
        .catch(err =>{
           
            dispatch({ 

                type:types.SEARCH_TICKET_FAIL
            })
        })
    }
}

export const cancelTicket=(ve,token)=>{
    return (dispatch)=>{
        axios.post(
            types.URL_API_LOCAL+`/ve-cancel`,
            ve,{headers:{
                'Authorization':token
        }})
        .then((response)=>{
            console.log(response);
            dispatch({
                type:types.CANCEL_TICKET_SUCCESS,
                payload:response.data
            })
        })
        .catch((error)=>{
            dispatch({
                type:types.CANCEL_TICKET_FAIL,
                payload:error
            })
        })
    }
}

export const getVe = ()=>{
    return dispatch =>{
        axios.get(types.URL_API_LOCAL+`/get-ve`)
        .then(res =>{
            dispatch({ type:types.GET_TICKETS_SUCCES,
            payload:res.data});
        })
        .catch(err =>{
            dispatch({ type:types.GET_TICKETS_FAIL});
        })
    }
}