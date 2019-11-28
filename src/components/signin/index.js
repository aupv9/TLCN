import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {connect} from "react-redux";
import {signIn,setTokenSession} from '../../redux/action/user';
import * as types from '../../redux/type';
import { toast ,ToastContainer} from 'react-toastify';


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height:'540px'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
/* Status state input user*/
const FormError=(isHidden,errorMessage) =>{
  if (isHidden) {return null;}
  return (
    <div className="form-warning"
        style={{color:"red"}} >
        {errorMessage}
    </div>
  )
}
const SignIn =(props)=> {
  
   const classes = useStyles();
   const [countLog,setCountLog]=useState(1);
   useEffect(() => {
      
   },[])
   /* Side effect*/
   useEffect(() => {
    if(props.logUser.action === types.LOGIN_SUCCESS){
        /*Save token xuống redux */
        props.setSession(props.logUser.token);
        /*Save để giữ đăng nhập trên browser */
        if(!props.token){
          localStorage.setItem("isLogin",JSON.stringify(true));
          localStorage.setItem("name",JSON.stringify(email));
        }
        /*Chuyển về page home */
        props.history.push("/");
    }
    if(props.logUser.action === types.LOGIN_FAILED){
      toast.error("Sai Mật Khẩu Hoặc Tài Khoản!", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  });
  /*State*/
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  /* State Email*/
  const [isEmailValid,setIsEmailValid]=useState(false);
  const [errorEmailMessage,setErrorEmailMessage]=useState("");
  /* State Password*/
  const [isPasswordValid,setIsPasswordValid]=useState(false);
  const [errorPasswordMessage,setErrorPasswordMessage]=useState("");
  const handleInputChange= event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    switch (name){
      case "email":
          setEmail(value);
      case "password":
          setPassword(value);
    }
  }

//   /*Check email validation*/
  const validateEmail = (checkingText) => {
    const regexp =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexp.exec(checkingText) !== null) {
        return {
          isEmailValid: true,
          errorEmailMessage: ''
        };
    } else {
        return {
          isEmailValid: false,
          errorEmailMessage: 'Email không hợp lệ (abc@vn.com)'
        };
    }
  }

  const validatePassword=(password,type)=>{
    const lengthPassword=password.length;
    switch(type){
      case 1:
          if(lengthPassword === 0){
            return {
              isPasswordValid:false,
              errorPasswordMessage:"Mật khẩu không được bỏ trống!"
            }
          }
          if(lengthPassword >=6){
            return {
              isPasswordValid:true,
              errorPasswordMessage:""
            }
          }else{
            return {
              isPasswordValid:false,
              errorPasswordMessage:"Mật khẩu phải 6 ký tự trở lên"
            }
          }
        }
    }
      
//   }
  /* Check email*/
  const handleEmailValidation = event => {
    const { isEmailValid, errorEmailMessage } = validateEmail(email);
    setIsEmailValid(isEmailValid);
    setErrorEmailMessage(errorEmailMessage);
  }
  /* Check password*/
  const handlePasswordValidation = event =>{
    const {isPasswordValid,errorPasswordMessage}=validatePassword(password,1);
    setIsPasswordValid(isPasswordValid);
    setErrorPasswordMessage(errorPasswordMessage);
  }
    /*Login */
   const login =()=>{
    const user={
      username:email,
      password:password
    }
    props.loginCallAPI(user);
    let count=countLog+1;

    setCountLog(count);
   }
  
    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Đăng Nhập
            </Typography>
            <div className={classes.form} >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                 onChange={handleInputChange}
                 onBlur={handleEmailValidation}
              />
               {FormError(isEmailValid,errorEmailMessage)} 

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mật Khẩu"
                type="password"
                id="password"
                 onChange={handleInputChange}
                 onBlur={handlePasswordValidation}

              />
               {FormError(isPasswordValid,errorPasswordMessage)} 

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={login}
              >
                Đăng Nhập
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Quên Mật Khẩu?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/sign-up" variant="body2">
                    {"Chưa có tài khoản? Đăng ký"}
                  </Link>
                </Grid>
              </Grid>
            </div>
          </div>
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

const mapStateToProps =(state)=>({
  logUser:state.logUser
});
const mapDispatchToProps = dispatch => {
  return {
    loginCallAPI: (user) => {
        dispatch(signIn(user));
      },
    setSession:(token)=>{
      setTokenSession(token);
    }
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);