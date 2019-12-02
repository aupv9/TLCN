import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from "reactstrap";
import {connect} from "react-redux";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {putSeat} from "../../redux/action/car";


const Seat = (props) =>{
    //const classes = useStyles();
    /*đây là trạng thái của 1 seat*/
    const [isPut,setPut]=new React.useState(false);

    /*ref props*/
    const {seat,putSeat,seats}=props;

    /*style cho seat dựa trên isPut*/
    const colorBook = isPut ? "bg-primary" : "";

    /*seat đã được đặt hay chưa*/
    const checkSeat = seat.dat ? " bg-dark" : "";

    /*func put seat*/
    const handlePut= isPut =>{
        setPut(isPut);
        /*action redux*/
        putSeat(seat,isPut);
    }
    return (
        <>
            <Button style={{backgroundColor:"#fff",color:"#000",width:"50px",height:"30px"}}
                    variant="contained"
                    className={"m-3 " + colorBook + checkSeat }
                    disabled={seat.dat ? true : false}
                    onClick={()=>handlePut(!isPut)}>{seat.stt}</Button>
        </>
    );

}
const mapStateToProps=(state)=>({
    seats:state.seat
});
export default connect(mapStateToProps,{putSeat})(Seat);

