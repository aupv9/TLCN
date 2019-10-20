import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from "reactstrap";
import {connect} from "react-redux";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {putSeat} from "../../redux/action";


const Seat = (props) =>{
    //const classes = useStyles();
    const [isPut,setPut]=new React.useState(false);
    const {seat,putSeat,seats}=props;
    const colorBook = isPut ? "bg-primary" : "";
    const checkSeat = seat.dat ? " bg-dark" : "";
    const handlePut= isPut =>{
        setPut(isPut);
        putSeat(seat,isPut);
    }

    return (
        <>
            <Button style={{backgroundColor:"#fff",color:"#000"}}
                    variant="contained"
                    className={"m-3 " + colorBook + checkSeat}
                    disabled={seat.dat ? true : false}
                    onClick={()=>handlePut(!isPut)}>{seat.stt}</Button>
        </>
    );

}
const mapStateToProps=(state)=>({
    seats:state.seat
});
export default connect(mapStateToProps,{putSeat})(Seat);

