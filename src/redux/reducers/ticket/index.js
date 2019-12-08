import * as types from '../../type';
import * as _ from 'lodash';

let initState={
};
let ticket = (state=initState,action) =>{

    state.action=action.type;
    switch (action.type) {    
        case types.SAVE_TICKET:
            return {
                ...state,
                ticket:action.payload
            }
        case types.UNSAVE_TICKET:
            return {
                ...state,
                ticket:{}
            }
        case types.PUT_TICKET_SUCCESS:
            return {
                ...state
            }
        case types.PUT_TICKET_FAILED:
                return {
                    ...state
                }      
        case types.PUT_TICKET_FAILED:
                return {
                    ...state
            }
        case types.SEND_MAIL_SUCESS:
                return {
                    ...state
            }
        case types.SEND_MAIL_FAIL:
                return {
                    ...state
            }    
         case types.SEARCH_TICKET_SUCCESS:
                return {
                    ...state,
                    infoticket:action.payload
        }    
        case types.SEARCH_TICKET_FAIL:
            return {
                ...state
        }  
        case types.CANCEL_TICKET_SUCCESS:
            return {
                ...state
        } 
        case types.CANCEL_TICKET_FAIL:
            return {
                ...state
        }                              
        default:
            return state;
    }


}


export default ticket;
