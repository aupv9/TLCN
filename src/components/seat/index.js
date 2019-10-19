import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from "reactstrap";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    seat:{
        marginLeft:"30px",
        marginRight:"10x",
        marginTop:"20px",
        marginBottom:"20px"
    }
});

function Seat(props) {
    const classes = useStyles();
    const [isPut,setPut]=new React.useState(false);
    const {seat}=props;
    const colorBook = isPut ? "bg-danger " : "";
    const checkSeat = seat.dat ? " bg-dark" : "";
    const handlePut= isPut =>{
        setPut(isPut);

    }
    return (
        <>
            <Button style={{backgroundColor:"#fff",color:"#000"}}
                    variant="contained"
                    className={"m-2 " + colorBook + checkSeat}
                    disabled={seat.dat ? true : false}
                    onClick={()=>handlePut(!isPut)}>{seat.stt}</Button>
        </>
    );

}
export default Seat;
