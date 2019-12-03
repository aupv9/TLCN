import {combineReducers} from 'redux';
import filterCarReducer from "./todoCars";
import seat from "./putSeat";
import user from "./user";


export default combineReducers({
    filterCarReducer,
    seat,
    user
});
