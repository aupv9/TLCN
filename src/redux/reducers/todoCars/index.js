import * as types from '../../type';


let initState={};
let filterCarReducer= (state=initState,action) =>{

    state.action=action.type;
    switch (action.type) {
        case types.GET_LIST_CAR:
            return{
                ...state,
                data:action.payload
            }
        default:
            return state;
    }


}


export default filterCarReducer;