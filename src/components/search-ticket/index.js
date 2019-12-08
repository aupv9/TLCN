import React, { Component, useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {connect} from "react-redux";
import {searchTicket,cancelTicket} from '../../redux/action/ticket';
import * as types from '../../redux/type';
import NumberFormat from 'react-number-format';
import { toast ,ToastContainer} from 'react-toastify';
import Swal from 'sweetalert2'


const useStyles = makeStyles(theme => ({
    container:{
        height:"600px",
       marginTop:"20px"
    },
    table: {
        minWidth: 650,
      },
    
  }));

const SearchTicket  =(props)=>{

    const classes = useStyles();
    const [idVe,setIdve]=useState("");
    const [phone,setPhone]=useState("");
    const [ticket,setTicket]=useState({});
    const [result,setResult]=useState(false);
    const [cancel,setCancel]=useState(false);
    const handleInputChange= event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        switch (name){
          case "idVe":
            setIdve(value);
          case "phone":
            setPhone(value);
        
        }
    }
    
    useEffect(() => {
        if(props.ticket.action === types.CANCEL_TICKET_SUCCESS){
            setCancel(true);
            toast.success("Vé đã được hủy thành công!", {
                position: toast.POSITION.TOP_RIGHT
              });
        }
        if(props.ticket.action === types.CANCEL_TICKET_FAIL){
            setCancel(false);
            toast.error("Hủy vé thất bại!", {
                position: toast.POSITION.TOP_RIGHT
              });
        }
        if(props.ticket.action === types.SEARCH_TICKET_SUCCESS){
            setTicket(props.ticket.infoticket);
            setCancel(props.ticket.infoticket.huy);
            setResult(true);
        }
        if(props.ticket.action === types.SEARCH_TICKET_FAIL){
            toast.error("Không có vé bạn cần tìm!", {
                position: toast.POSITION.TOP_RIGHT
              });
            setResult(false);
        }
    });
    const onSearchTicket=()=>{

        const token=JSON.parse(localStorage.getItem("token"));
        if(!token){
            toast.error("Cần phải đăng nhập trước !", {
                position: toast.POSITION.TOP_RIGHT
              });
        }else{
            props.searchTicket(idVe,phone,token);
        }
    }

    const onCancelTicket=()=>{
        const token=JSON.parse(localStorage.getItem("token"));
        Swal.fire({
            title: 'Thông Báo?',
            text: "Bạn muốn hủy vé ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đồng ý!'
          }).then((result) => {
            if (result.value) {
              props.cancelTicket({
                  _id:idVe
              },token);
            }
          })
    }

    return (
        <Container component="div" 
                    className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
              
                    <Typography style={{fontWeight:"500",fontSize:"20px",
                          paddingLeft:"15px",paddingTop:"20px"}}>
                          NHẬP THÔNG TIN VÉ
                       </Typography>
                       <div className={classes.form} >
                            <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Mã vé"
                                    name="idVe"
                                    className={classes.input}
                                    onChange={handleInputChange}

                            />
                            {/* / {FormError(isEmailValid,errorEmailMessage)} */}

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="phone"
                                label="Số điện thoại"
                                type="number"
                                id="phone"
                                className={classes.input}

                                 onChange={handleInputChange}
                                //onBlur={handlePasswordValidation}

                            />
                          
                                <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                        onClick={onSearchTicket}
                                    >
                                        KIỂM TRA VÉ
                                    </Button>
                        </div>
                
                </Grid>
                <Grid item xs={9}>
                {
                    result?(
                        <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Hãng xe</TableCell>
                            <TableCell >Nơi đón</TableCell>
                            <TableCell >Giờ đón (dự kiến)</TableCell>
                            <TableCell >Trả khách</TableCell>
                            <TableCell >Số ghế</TableCell>
                            <TableCell >Tuyến đường</TableCell>
                            <TableCell >Giá vé</TableCell>
                            <TableCell >Phụ thu</TableCell>
                            <TableCell >Tổng tiền</TableCell>
                            <TableCell >Hình thức thanh toán</TableCell>
                            <TableCell >Tình trạng vé</TableCell>
                        </TableRow>
                    </TableHead>
                        <TableBody>                          
                            <TableRow> 
                                <TableCell>{ticket.hangxe?ticket.hangxe:""}</TableCell>
                                <TableCell>{ticket.noidon?ticket.noidon:""}</TableCell>
                                <TableCell>{ticket.giodon?ticket.giodon:""}</TableCell>       
                                <TableCell>{ticket.noitra?ticket.noitra:""}</TableCell>       
                                <TableCell>{ticket.soghe?ticket.soghe:""}</TableCell>       
                                <TableCell>{ticket.tuyenduong?ticket.tuyenduong:""}</TableCell>       
                                <TableCell>
                                            <NumberFormat thousandSeparator={false}

                                                        style={{border:"none",width:"100px"}}
                                                        value={ticket.giave}
                                                        suffix={".000đ"}
                                                        defaultValue={"0đ"}
                                                        isAllowed={true}
                                            
                                              /></TableCell>    
                                <TableCell>
                                            <NumberFormat thousandSeparator={false}
                                                        style={{border:"none",width:"100px"}}
                                                        value={ticket.phuthu}
                                                        suffix={".000đ"}
                                                        defaultValue={"0đ"}
                                                        isAllowed={true}/>   </TableCell>          
                                <TableCell>
                                            <NumberFormat thousandSeparator={false}
                                                        style={{border:"none",width:"100px"}}
                                                        value={ticket.phuthu+ticket.giave}
                                                        suffix={".000đ"}
                                                        defaultValue={"0đ"}
                                                        isAllowed={true}/></TableCell>       
                               
                                <TableCell>{"Thanh toán tại nhà xe"}</TableCell>       
                                <TableCell>{cancel?"Hủy":"Chưa hủy"}
                                        {
                                            cancel?null:(
                                            <Button variant="contained" 
                                                color="secondary"
                                                onClick={onCancelTicket}
                                                >
                                                Hủy vé
                                                </Button>
                                           )
                                        }
                                </TableCell>       

                            </TableRow>  
                        </TableBody>
                    </Table>
                    ):(
                        <img src="https://cdn6.agoda.net/images/MVC/default/background_image/illustrations/color-homepage-flights.png" 
                            style={{width:"930px",marginTop:"100px"}}
                        ></img>
                    )
                }
                
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
        );
    
}

const mapStateToProps=(state)=>({
    user:state.user,
    seat:state.seat,
    ticket:state.ticket,

});
const mapDispatchToProps = dispatch => {
    return {
        searchTicket:(id,phone,token)=>{
            dispatch(searchTicket(id,phone,token));
        },
        cancelTicket:(id,token)=>{
            dispatch(cancelTicket(id,token));
        }
    };
};
export default  connect(mapStateToProps,mapDispatchToProps)(SearchTicket);