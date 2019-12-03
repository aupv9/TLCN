import * as types from '../../type';
import axios from 'axios';


/** */
export const getCar= (start, end, date) =>{
    return dispatch =>{

        axios.get(types.URL_API+`/Cars/start=${start}&end=${end}&date=${date}`)
                    .then(
                        (response)=>
                        {
                            dispatch(
                                    {
                                        type:types.GET_LIST_CAR_SUCCESS,
                                        payload:response.data
                                    }
                                );
                        })
                    .catch((error) =>{  
                        dispatch(
                            {
                                type:types.GET_LIST_CAR_ERR,
                                payload:error
                            }
                        );
                    });
    };
};

export  const putSeat = (item,status)=>{
    return {
            type:types.PUT_SEAT,
            payload:item,
            status
    };
}

export  const putNull = () =>{
    return {
        type:types.PUT_NULL
    };
}

