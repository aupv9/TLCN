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
        case types.GET_CAR_ALL_SUCCESS:
            return {
                ...state,
                cars:action.payload
            }
        case types.GET_CAR_ALL_FAIL:
            return {
                ...state,
            } 
        case types.CREATE_CAR_SUCCESS:
                return {
                    ...state,
                } 
        case types.CREATE_CAR_FAIL:
                return {
                       ...state,
            } 
        default:
            return state;
    }
}
export default filterCarReducer;