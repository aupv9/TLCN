import * as types from '../../type';
import * as _ from 'lodash';

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
                        ),
                        priceSeats:action.payload.gia+_.sumBy(state.seat,(o)=>{return o.Gia;})
                    };

            }else{
                return {
                    ...state,
                    seat: state.seat.filter(item => item.MaGhe !== action.payload.maGhe),
                    priceSeats:_.sumBy(state.seat,(o)=>{return o.Gia;})-action.payload.gia
                };
            }
        case types.PUT_NULL:
            return {
                ...state,
                seat: []
            }
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
                    
        default:
            return state;
    }


}


export default seat;
