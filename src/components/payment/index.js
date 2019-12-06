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
import {setTicket, sendMailAPI} from '../../redux/action/ticket';
import { toast ,ToastContainer} from 'react-toastify';
import * as types from '../../redux/type';
import {
    useHistory
  } from "react-router-dom";



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
    let history=useHistory();
    const [valuePay, setValuePay] = React.useState("CHTL");
    const [ticket,setTicket]=useState({});
    const [khachhang,setKhachHang]=useState("");
    const [phone,setPhone]=useState("");

    const [email,setEmail]=useState("");
    const [giodon,setGiodon]=useState("");
    const [noidon,setNoidon]=useState("");
    const [giotra,setGiotra]=useState("");
    const [noitra,setNoitra]=useState("");

    /*Time */
    const [timeout,setTimeout] = useState(300);

    const timeOut = () => {
        if (timeout === 0) {
          alert("Time out! Please re-book ");
          props.history.goBack();
        }
      };

    useEffect(() => {
        if( props.seat.action === types.SEND_MAIL_SUCESS){
            alert("Bạn đã đặt vé thành công vui lòng kiểm tra email để lấy thông tin vé !");
            localStorage.removeItem("ticket");

            history.goBack();
            //window.location.reload();
            // toast.success("Bạn đã đặt vé thành công vui lòng kiểm tra email để lấy thông tin vé !", {
            //     position: "top-right",
            //     autoClose: 10000,
            //     hideProgressBar: true,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true
            //   });
        }
        if(props.seat.action === types.SEND_MAIL_FAIL){
            toast.success("Bạn đã đặt vé thành công vui lòng kiểm tra email để lấy thông tin vé !", {
                position: "top-right",
                autoClose: 10000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
              });
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
    });
    /* === Didmounting */
    useEffect(() => {
        const tick=JSON.parse(localStorage.getItem('ticket'));
        if(tick){
            console.log(tick);
            setKhachHang(tick.khachhang);
            setPhone(tick.sdt);
            setEmail(tick.email);
            setGiodon(tick.giodon);
            setNoidon(tick.noidon);
            setGiotra(tick.giotra);
            setNoitra(tick.noitra);
        }
        
        if(!JSON.parse(localStorage.getItem('token')) || !localStorage.getItem('ticket')) {
            
            history.goBack();

        }
    },[]);
    const handleChange = event => {
        console.log(event.target.value);
        setValuePay(event.target.value);
    };

    /*Tiến hành đặt vé */
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
            const mail={
                email:email,
                _id:JSON.parse(localStorage.getItem('ticket'))._id
            }
            const token=JSON.parse(localStorage.getItem('token'));
          
            props.setTicket(ticket,token);
            props.sendMail(mail,token);
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
                                {khachhang}</Typography>
                            </TableCell>
                            </TableRow>

                            <TableRow >
                            <TableCell component="th" scope="row">
                            <Typography>
                                <strong>Số điện thoại</strong></Typography>
                            </TableCell>
                            <TableCell component="th" scope="row">
                            <Typography>
                            {phone}</Typography>
                            </TableCell>
                            </TableRow>

                            <TableRow >
                            <TableCell component="th" scope="row">
                            <Typography>
                                <strong>Email</strong></Typography>
                            </TableCell>
                            <TableCell component="th" scope="row">
                            <Typography>
                            {email}</Typography>
                            </TableCell>
                            </TableRow>

                            <TableRow >
                            <TableCell component="th" scope="row">
                            <Typography>
                                <strong>Đón (dự kiến)</strong></Typography>
                            </TableCell>
                            <TableCell component="th" scope="row">
                            <Typography>
                            {giodon}</Typography>
                            </TableCell>
                            </TableRow>

                            <TableRow >
                            <TableCell component="th" scope="row">
                            <Typography>
                            </Typography>
                            </TableCell>
                            <TableCell component="th" scope="row">
                            <Typography>
                            {noidon}</Typography>
                            </TableCell>
                            </TableRow>


                            <TableRow >
                            <TableCell component="th" scope="row">
                            <Typography>
                                <strong>Trả</strong></Typography>
                            </TableCell>
                            <TableCell component="th" scope="row">
                            <Typography>
                            {giotra}</Typography>
                            </TableCell>
                            </TableRow>

                            <TableRow >
                            <TableCell component="th" scope="row">
                            <Typography>
                           </Typography>
                            </TableCell>
                            <TableCell component="th" scope="row">
                            <Typography>
                            {noitra}</Typography>
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
           
            </Container>
            <ToastContainer></ToastContainer>
      
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
        }, 
        sendMail:(mail,token)=>{
            dispatch(sendMailAPI(mail,token));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Payment);