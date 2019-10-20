import * as types from '../../type';


let initState={
    seat:[]
};
let seat = (state=initState,action) =>{

    state.action=action.type;
    switch (action.type) {
        case types.PUT_SEAT:
            if(action.status){
                return {
                    ...state,
                   seat: state.seat.concat(
                       {
                           MaGhe:action.payload.maGhe,
                           Gia:action.payload.gia
                       }
                   )
                };
            }else{
                return {
                    ...state,
                    seat: state.seat.filter(item => item.MaGhe !== action.payload.maGhe
                    )
                };
            }
        case types.PUT_NULL:
            return {
                ...state,
                seat: []
            }
        default:
            return state;
    }


}


export default seat;
