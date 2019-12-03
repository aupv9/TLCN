import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {putSeat} from "../../redux/action/car";
import EventSeatIcon from '@material-ui/icons/EventSeat';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
const Seat = (props) =>{
    //const classes = useStyles();
    /*đây là trạng thái của 1 seat*/
    const [isPut,setPut]=new React.useState(false);

    /*ref props*/
    const {seat,putSeat,seats}=props;

    /*style cho seat dựa trên isPut*/
    const colorBook = isPut ? "MuiSvgIcon-colorPrimary" : "";

    /*seat đã được đặt hay chưa*/
    const checkSeat = seat.dat ? " MuiSvgIcon-colorDisabled" : "";

    /*func put seat*/
    const handlePut= isPut =>{
        setPut(isPut);
        /*action redux*/
        putSeat(seat,isPut);
    }
    return (
        <>
            {/* <Button style={{}}
                    className={"m-3 " + colorBook + checkSeat }
                    disabled={seat.dat ? true : false}
                    {/* onClick={()=>handlePut(!isPut)}>  */}
                    <Tooltip title={`Số ghế: `+seat.stt +`, `+`Giá: `+seat.gia+`.000đ`}>
                        <IconButton aria-label="delete">
                        <EventSeatIcon  className={colorBook + checkSeat}  
                                    onClick={()=>handlePut(!isPut)}   
                                    disabled={seat.dat ? true : false}                
                                     fontSize="large"/>
                        </IconButton>
                    </Tooltip>
                    
            {/* </Button> */}
       
        </>
    );

}
const mapStateToProps=(state)=>({
    seats:state.seat
});
export default connect(mapStateToProps,{putSeat})(Seat);

