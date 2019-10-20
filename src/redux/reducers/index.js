import {combineReducers} from 'redux';
import filterCarReducer from "./todoCars";
import seat from "./putSeat";

export default combineReducers({
    filterCarReducer,
    seat
});
