import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {connect} from "react-redux";
import {saveTicket} from '../../redux/action/ticket';
import { toast ,ToastContainer} from 'react-toastify';
import {
  useHistory
} from "react-router-dom";


const useStyles = makeStyles(theme => ({
    container:{
        width: "350px",
        paddingLeft:"10px",
        marginLeft:"10px",
      
    },
    paper:{
        height: "535px",
        padding:"10px"
    },
    textNote:{
        marginBottom:"10px",
        marginTop:"10px",
        width:"100%"
    }
    
  }));
const Informationuser =(props)=> {
    const classes = useStyles();
    let history=useHistory();
    /*State lưu các thông tin người đặt  */
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [note,setNote]=useState("");


    /*Set value thông tin người dùng */
    const handleInputChange= event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        switch (name){
          case "name":
            setName(value);
          case "phone":
            setPhone(value);
          case "email":
            setEmail(value);
          case "note":
            setNote(value);
        }
    }
    /**Random string  */
    const  randomString=(length, chars)=>{
      var result = '';
      for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result;
  }
    /**method đặt vé */
    const setTicketUp =()=>{

      if( props.seat.seat.length <= 0){

        toast.error("Phải chọn ghế !", {
          position: toast.POSITION.TOP_RIGHT
        });

      }else if(props.user.locationStart === undefined || props.user.locationEnd === undefined){

        toast.error("Phải chọn  nơi đi và nơi đến !", {
          position: toast.POSITION.TOP_RIGHT
        });

      }else if(!name || !phone || !email ){

        toast.error("Phải nhập đầy đủ thông tin!", {
          position: toast.POSITION.TOP_RIGHT
        });

      }else{
        let seats="";
        props.seat.seat.forEach(seat =>{
          seats+=seat.MaGhe+" ";
        });
        let prieSeats=0;
        props.seat.seat.forEach(seat =>{
          prieSeats+=seat.Gia
        });
          /*Xử lý nơi đón */
          
          const arrLocationStart=props.user.locationStart.split("-");
          let noiDon="";
  
          for (let index = 1; index < arrLocationStart.length; index++) {
              const element = arrLocationStart[index];
              noiDon+=element+" ";
          }
          /*Xử lý nơi trả */
          const arrLocationEnd=props.user.locationEnd.split("-");
          let noiTra="";
  
          for (let index = 1; index < arrLocationEnd.length; index++) {
              const element = arrLocationEnd[index];
              noiTra+=element+" ";
          } 
          
          const _id=randomString(6,'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
          const ticket={
            _id:_id,
            hangxe:props.filterCarReducer.selectCar.nhaxe,
            ngaydat:new Date().getDay().toString()+"-"
                  +new Date().getMonth().toString()+"-"+new Date().getFullYear().toString(),
            khachhang:name,
            noidon:noiDon,
            giodon:arrLocationStart[0],
            noitra:noiTra,
            giotra:arrLocationEnd[0],
            giave:prieSeats,
            phuthu:0,
            soghe:seats,
            tinhtrang:false,
            huy:false,
            sdt:phone,
            email:email,
            tuyenduong:props.filterCarReducer.selectCar.chuyendi
          };
         localStorage.setItem("ticket",JSON.stringify(ticket));
         history.push("/payment");
         props.saveTicket(ticket);
      }
      
      
    }

    return (
        <Container component="main" maxWidth="xs"
                    className={classes.container}>
            <Grid container
                  >
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <Typography style={{fontWeight:"500",fontSize:"20px",
                          paddingLeft:"15px",paddingTop:"20px"}}>
                          NHẬP THÔNG TIN
                       </Typography>
                       <div className={classes.form} >
                            <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Họ tên"
                                    name="name"
                                    className={classes.input}
                                    onChange={handleInputChange}
                            //  onBlur={handleEmailValidation}
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
                            {/* {FormError(isPasswordValid,errorPasswordMessage)}  */}
                            
                            <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    type="email"
                                    className={classes.input}
                                onChange={handleInputChange}
                            //  onBlur={handleEmailValidation}
                            />
                            <TextField
                                    id="note"
                                    label="Ghi Chú"
                                    multiline
                                    rows="4"
                                    placeholder="Nhà xe cố gắng phục vụ quý khách "
                                    variant="outlined"
                                    name="note"
                                    className={classes.textNote}
                                    />
                                <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                        onClick={setTicketUp}
                                    >
                                        Tiếp tục
                                    </Button>
                        </div>
                    </Paper>
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
    ticket:state.ticket,
    seat:state.seat,
    filterCarReducer:state.filterCarReducer
});
const mapDispatchToProps = dispatch => {
    return {
        saveTicket:(ticket)=>{
            dispatch(saveTicket(ticket));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Informationuser);