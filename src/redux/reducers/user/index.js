import * as types from '../../type';


let initState={
    
};
let User= (state=initState,action) =>{

    state.action=action.type;
    switch (action.type) {
        case types.SIGN_UP_SUCCESS:
            return {
                ...state
            }
        case types.SIGN_UP_FAILED:
            return {
                ...state
            }
        case types.LOGIN_SUCCESS:
            return{
                ...state,
                token:action.payload
            }
        case types.LOGIN_FAILED:
            return{
                ...state
            }
        case types.SET_TOKEN:
            return{
                ...state,
                token:action.payload
            }
        case types.DEL_TOKEN:
            return{
                ...state,
                token:""
            }
        case types.SET_START_LOCATION:
            return{
                ...state,
                locationStart:action.payload,
            }
        case types.SET_END_LOCATION:
            return{
                ...state,
                locationEnd:action.payload,
           }
        default:
            return state;
    }
}
export default User;