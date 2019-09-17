import * as types from '../type';
import axios from 'axios';

export const getCar= (start, end, date) =>{
    return dispatch =>{
        axios.get(`https://webapi-service.herokuapp.com/api/Cars/start=${start}&end=${end}&date=${date}`)
                    .then(
                        (response)=>
                        {
                            console.log(response);
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