import {combineReducers} from 'redux';
import filterCarReducer from "./todoCars";
import seat from "./putSeat";
import logUser from "./user";


export default combineReducers({
    filterCarReducer,
    seat,
    logUser
});
