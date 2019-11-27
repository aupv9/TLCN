import React ,{useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {connect} from "react-redux";
import {signup} from '../../redux/action/user';
import * as types from '../../redux/type';
import { toast ,ToastContainer} from 'react-toastify';


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    marginbottom: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '615px',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const FormError=(isHidden,errorMessage) =>{
    if (isHidden) {return null;}
    return (
      <div className="form-warning"
          style={{color:"red"}} >
          {errorMessage}
      </div>
    )
  }

 const SignUp=(props)=>{
  const classes = useStyles();

  useEffect(() => {
    resetMessage();
    if(props.logUser.action === types.SIGN_UP_SUCCESS){
        toast.success("Success Sign Up !", {
            position: toast.POSITION.TOP_RIGHT
          });
    }
    if(props.logUser.action === types.SIGN_UP_FAILED){
      setLogiSucces(false);
      toast.error("Failed Sign Up !", {
        position: toast.POSITION.TOP_RIGHT
      });

    }
  },[]);
/*State*/
const [isLogiSucces,setLogiSucces] =useState(false);
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [repassword,setRepassword]=useState("");
/* State Email*/
const [isEmailValid,setIsEmailValid]=useState(false);
const [errorEmailMessage,setErrorEmailMessage]=useState("");
/* State Password*/
const [isPasswordValid,setIsPasswordValid]=useState(false);
const [errorPasswordMessage,setErrorPasswordMessage]=useState("");
 /* State RePassword*/
const [isRePasswordValid,setIsRePasswordValid]=useState(false);
const [errorRePasswordMessage,setErrorRePasswordMessage]=useState("");

const handleInputChange= event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    switch (name){
      case "email":
          setEmail(value);
      case "password":
          setPassword(value);
      case "repassword":
          setRepassword(value);
    }
}

/*Check email validation*/
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
      case 2:
          if(lengthPassword === 0){
            return {
              isRePasswordValid:false,
              errorRePasswordMessage:"Mật khẩu không được bỏ trống!"
            }
          }
          if(lengthPassword >=6){
            return {
              isRePasswordValid:true,
              errorRePasswordMessage:""
            }
          }else{
            return {
              isRePasswordValid:false,
              errorRePasswordMessage:"Mật khẩu phải 6 ký tự trở lên"
            }
          }
  }
    
}
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
 /* Check Repassword*/
 const handleRePasswordValidation = event  =>{
  const {isRePasswordValid,errorRePasswordMessage}=validatePassword(repassword,2);
  setIsRePasswordValid(isRePasswordValid);
  setErrorRePasswordMessage(errorRePasswordMessage);
}

const resetMessage = () =>{
  setErrorEmailMessage("");
  setErrorPasswordMessage("");
  setErrorRePasswordMessage("");
}

/*Regiter */
const register = () =>{
    if( !email || !password || !repassword){
        toast.warn("Phải nhập Email và Mật Khẩu !", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
    }else{
        if(password === repassword && !password ){
            const user={
                username:email,
                password:password
              }
            props.registerUser(user);
        }else{
            toast.warn("Mật khẩu không khớp", {
                position: toast.POSITION.TOP_RIGHT
              });
        
        }
    }
   
    
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Đăng Ký
        </Typography>
        <div className={classes.form} >
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="email"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Email"
                autoFocus
                onChange={handleInputChange}
                onBlur={handleEmailValidation}
              />
                {FormError(isEmailValid,errorEmailMessage)}

            </Grid>
           
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Mật Khẩu"
                name="password"
                type="password"
                onChange={handleInputChange}
                onBlur={handlePasswordValidation}

              />
                {FormError(isPasswordValid,errorPasswordMessage)}

            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="repassword"
                label="Nhập lại mật khẩu"
                type="password"
                id="password"
                onChange={handleInputChange}
                onBlur={handleRePasswordValidation}
              />
                {FormError(isRePasswordValid,errorRePasswordMessage)}

            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={register}
          >
            Đăng Ký
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/sign-in" variant="body2">
                Đã có tài khoản? Đăng Nhập
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
      <ToastContainer position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
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
      registerUser: (user) => {
          dispatch(signup(user));
      }
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);