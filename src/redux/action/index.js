import * as types from '../type';
import axios from 'axios';

export const getCar= ()=>{

    return dispatch =>{
        axios.get("https://webapi-service.herokuapp.com/api/Cars/start=63&end=59&date=26-8-2019")
                    .then(
                        (response)=>
                        {
                            dispatch(
                                    {
                                        type:types.GET_LIST_CAR,
                                        payload:response.data
                                    }
                                );
                        })
                    .catch(function (error) {
                        console.log(error);
                    });

    };
};