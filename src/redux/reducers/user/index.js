import * as types from '../../type';


let initState={
};
let logUser= (state=initState,action) =>{

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
        default:
            return state;
    }
}
export default logUser;