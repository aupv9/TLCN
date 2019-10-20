import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import {Button, Col} from "reactstrap";
import * as _ from "lodash";
import Seat from "../seat";
import {connect} from "react-redux";
const classes=makeStyles({
    root:{
        width: '100%',
        overflowX: 'auto',
    },
    header:{
        fontSize:18
    }
})
class StageSeat extends Component {


    constructor(props){
        super(props);
        this.state={
            arrSeatSelected:[],
            arrSeatIndex:[],
            index:0
        };
    }
    putSeat = item =>{
        if(_.indexOf(this.state.arrSeatSelected,item) !== -1){
            _.pull(this.state.arrSeatSelected,item);
            _.pull(this.state.arrSeatIndex,item);
        }else{
            this.state.arrSeatSelected.push(item);
            this.state.arrSeatIndex.push(item.stt);
        }

    }
    render() {
        const danhSachGhe=this.props;
        const numSeat = this.state.arrSeatIndex.map(item => (
            <span key={item}>
                {item}
                {", "}
        </span>
        ));

        return (
            <>
                <Col md="12">
                    <Paper className={classes.root}>
                        {/*Start header intro seat*/}
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="left">
                                        <Button style={{marginRight:"5px",
                                            backgroundColor:"#fff"}}></Button>
                                        Ghế Trống
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button  style={{marginRight:"5px",
                                            backgroundColor:"#cfcfcf"}}></Button>
                                        Ghế Đã Đặt
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button style={{marginRight:"5px",
                                            backgroundColor:"#007BFF"}}></Button>
                                        Ghế Đang Đặt
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        {/*    End header seat*/}
                        <Paper style={{padding:"40PX",borderBottomLeftRadius:"0"}}>
                            <Box style={{position:"absolute",bottom:"50px",left:"25px"}}>
                                <img width="20"
                                     className="img-responsive wheel-img"
                                     src="https://storage.googleapis.com/fe-production/images/Route/steering-wheel.svg"/>
                            </Box>
                            <Paper style={{marginLeft:"20px"}}>
                                {
                                    danhSachGhe.danhSachGhe.map((item,index)=>
                                        <Seat seat={item}/>
                                    )
                                }
                            </Paper>
                        </Paper>
                    </Paper>
                    <Paper style={{marginTop:"3px"}}>
                        <Typography>
                            <Box textAlign="left"
                                 style={{marginLeft:"10px",paddingTop:"10px"}}>
                                Số ghế:
                                {
                                    this.props.seats.seat.map(item =>  (
                                            <span>{item.MaGhe}{" "}</span>
                                    ))
                                }
                            </Box>
                        </Typography>
                    </Paper>
                </Col>
            </>
        );
    }
}

StageSeat.propTypes = {};
const mapStateToProps=(state)=>({
    seats:state.seat
});
export default connect(mapStateToProps,null)(StageSeat);
