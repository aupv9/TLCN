import * as types from '../type';
import axios from 'axios';
import {URL_API} from "../type";

export const getCar= (start, end, date) =>{
    return dispatch =>{
        axios.get(URL_API+`/Cars/start=${start}&end=${end}&date=${date}`)
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