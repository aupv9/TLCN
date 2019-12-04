import * as types from '../../type';

let initState={
    
};
let filterCarReducer= (state=initState,action) =>{

    state.action=action.type;
    switch (action.type) {
        case types.GET_LIST_CAR_SUCCESS:
            return {
                ...state,
                data:action.payload
            }
        case types.GET_LIST_CAR_ERR:
            return {
                ...state,
                data: action.payload
            }
        case types.PUT_CAR:
            return {
                ...state,
                selectCar: action.payload
            }
        case types.DEL_CAR:
            return {
                ...state,
                selectCar: {}
            }        
        default:
            return state;
    }
}
export default filterCarReducer;