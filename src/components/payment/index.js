import React, { Component, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import NumberFormat from 'react-number-format';
import {connect} from "react-redux";
import {setTicket} from '../../redux/action/ticket';
import { toast ,ToastContainer} from 'react-toastify';
import * as types from '../../redux/type';

const useStyles = makeStyles(theme => ({
    header:{
      backgroundColor:"#fff",
      color: "rgba(0,0,0,.75)"
    },
    logo:{
      width:60,
      height:60
    },
    table: {
        minWidth: 500,
        border:"1px solid #000",
        borderRadius:"5px",
        marginTop:"10px",
        borderBottom:"1px solid #000 !important"
    },
    left:{
          marginTop:"30px"
    },
    right:{
        marginTop:"30px"
    },
    button:{
        marginTop:"10px"
    },
    tableLeft:{
        minWidth:300,
        border:"1px solid #000",
        borderRadius:"5px",
        marginTop:"10px",
    }
}));


const Payment=(props) => {
   
    const classes = useStyles();
    const [valuePay, setValuePay] = React.useState("CHTL");

    /*Time */
    const [timeout,setTimeout] = useState(3000);

    const timeOut = () => {
        if (timeout === 0) {
          alert("Time out! Please re-book ");
          props.history.goBack();
          window.location.reload();
        }
      };

    useEffect(() => {
        if(types.PUT_TICKET_SUCCESS === props.seat.action){
            console.log("đặt vé thành công");
        }else{
            console.log("đặt vé thất bại");
        }
    },[props.seat.action]);
    useEffect(() => {
       
        let timer = setInterval(() => {
            const newCount = timeout - 1;
            setTimeout(newCount >= 0 ? newCount : timeOut());
          }, 1000);
        return () => {
            clearInterval(timer);
          };
    })

    const handleChange = event => {
        console.log(event.target.value);
        setValuePay(event.target.value);
    };


    const onPay=()=>{

        if(!valuePay){
            toast.error("Phải chọn phương thức thanh toán!", {
                position: toast.POSITION.TOP_RIGHT
              });
        }else{
            const ticket={
                ...props.seat.ticket,
                hinhthucthanhtoan:valuePay
            }
            console.log(ticket,props.user.token);
            props.setTicket(ticket,props.user.token);
        }
    }
    /*Format time  */
    const format= (time) =>{
        let seconds = time % 60;
        let minutes = Math.floor(time / 60);
        minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
        seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
        return minutes + ":" + seconds;
    }
    
    return (
        <div>
            <Container maxWidth="md">
             <span className="lead">
                    Thời gian thanh toán còn lại:{" "}
                    <strong >
                        {format(timeout)}
                    </strong>
                </span>
            <Grid container spacing={3}>           
                <Grid item md={8}
                        className={classes.left}>
                    <Typography>Phương thức thanh toán</Typography>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="left">
                                <RadioGroup aria-label="pay" name="payment" value={valuePay} onChange={handleChange}>
                                    <FormControlLabel value="Visa,Master,JCB" control={<Radio />} label="Thẻ thanh toán quốc tế Visa, MasterCard, JCB" />
                                    <Divider />
                                    <FormControlLabel value="IB" control={<Radio />} label="Thẻ ATM nội địa/ Internet Banking" />
                                    <Divider />
                                    <FormControlLabel value="Zalo" control={<Radio />} label="Ví ZaloPay" />
                                    <Divider />
                                    <FormControlLabel value="CHTL" control={<Radio />} label="Cửa hàng tiện lợi gần nhà" />
                                    <Divider />
                                    <FormControlLabel value="Bank" control={<Radio />} label="Chuyển khoản ngân hàng" />
                                    <Divider />
                                    <FormControlLabel value="NhaXe" control={<Radio />} label="Văn phòng nhà xe" />
                                    <Divider />
                                    <FormControlLabel value="Momo" control={<Radio />} label="Ví Momo" />
                                </RadioGroup>
                            </TableCell>
                        </TableRow>
                        </TableHead>              
                    </Table>
                     <Button
                             type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.button}
                             onClick={onPay}
                                    >
                                        THANH TOÁN
                                    </Button>
                </Grid>
                <Grid item md={4}
                        className={classes.right}>
                    <Typography>Thông tin chuyến đi</Typography>
                    <Table className={classes.tableLeft} aria-label="simple table">
                    <TableBody>
                            <TableRow >
                            <TableCell component="th" scope="row">
                               <Typography>
                                <strong>Hành Khách</strong></Typography>
                            </TableCell>
                            <TableCell component="th" scope="row">
                            <Typography>
                                {props.seat.ticket.khachhang?props.seat.ticket.khachhang:""}</Typography>
                            </TableCell>
                            </TableRow>

                            <TableRow >
                            <TableCell component="th" scope="row">
                            <Typography>
                                <strong>Số điện thoại</strong></Typography>
                            </TableCell>
                            <TableCell component="th" scope="row">
                            <Typography>
                            {props.seat.ticket.sdt?props.seat.ticket.sdt:""}</Typography>
                            </TableCell>
                            </TableRow>

                            <TableRow >
                            <TableCell component="th" scope="row">
                            <Typography>
                                <strong>Email</strong></Typography>
                            </TableCell>
                            <TableCell component="th" scope="row">
                            <Typography>
                            {props.seat.ticket.email?props.seat.ticket.email:""}</Typography>
                            </TableCell>
                            </TableRow>

                            <TableRow >
                            <TableCell component="th" scope="row">
                            <Typography>
                                <strong>Đón (dự kiến)</strong></Typography>
                            </TableCell>
                            <TableCell component="th" scope="row">
                            <Typography>
                            {props.seat.ticket.giodon?props.seat.ticket.giodon:"10:0"}</Typography>
                            </TableCell>
                            </TableRow>

                            <TableRow >
                            <TableCell component="th" scope="row">
                            <Typography>
                            </Typography>
                            </TableCell>
                            <TableCell component="th" scope="row">
                            <Typography>
                            {props.seat.ticket.noidon?props.seat.ticket.noidon:""}</Typography>
                            </TableCell>
                            </TableRow>


                            <TableRow >
                            <TableCell component="th" scope="row">
                            <Typography>
                                <strong>Trả</strong></Typography>
                            </TableCell>
                            <TableCell component="th" scope="row">
                            <Typography>
                            {props.seat.ticket.giotra?props.seat.ticket.giotra:""}</Typography>
                            </TableCell>
                            </TableRow>

                            <TableRow >
                            <TableCell component="th" scope="row">
                            <Typography>
                           </Typography>
                            </TableCell>
                            <TableCell component="th" scope="row">
                            <Typography>
                            {props.seat.ticket.noitra?props.seat.ticket.noitra:""}</Typography>
                            </TableCell>
                            </TableRow>

                           
                        </TableBody>             
                    </Table>
                    <Typography>Tổng tiền:
                    <NumberFormat thousandSeparator={false}
                                              style={{border:"none"}}
                                              value={props.seat.priceSeats}
                                               suffix={".000đ"}
                                              defaultValue={"0đ"}
                                              isAllowed={true}/>
                    </Typography>
                </Grid>                
            </Grid>       
            <ToastContainer position="top-right"
                          autoClose={1000}
                          hideProgressBar={true}
                          newestOnTop={false}
                          rtl={false}
                          pauseOnVisibilityChange
                          draggable
                          pauseOnHover></ToastContainer>       
            </Container>
        </div>
    );
}

const mapStateToProps=(state)=>({
    user:state.user,
    seat:state.seat,

});
const mapDispatchToProps = dispatch => {
    return {
        setTicket:(ticket,token)=>{
            dispatch(setTicket(ticket,token));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Payment);