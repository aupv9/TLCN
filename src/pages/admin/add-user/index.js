import React, { Component,useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../../../components/sidebar';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import {connect} from "react-redux";
import {useHistory} from 'react-router-dom';
import * as types from '../../../redux/type';
import { toast ,ToastContainer} from 'react-toastify';



const useStyles = makeStyles(theme => ({
    sidebar:{
        width:"15%",
        height:"100%"
    },
    root: {     
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(4),
      },
      title: {
        flexGrow: 1,
      },
      header:{

            },
     container:{
        marginTop: theme.spacing(2),
    },
    table: {
        maxWidth: 1000,
      },
      btnAdd:{
          marginTop: theme.spacing(2),
          marginBottom:theme.spacing(2)
      }
  }));
const AddUser = (props)=> {

    //let history=useHistory();
    const [users,setUsers]=useState([]);




    useEffect(() => {

        const isAdmin=JSON.parse(localStorage.getItem("admin"));
        // if(!isAdmin){
        //     history.push("/");
        // }
        document.getElementById("footer").style.display="none";
        const token=JSON.parse(localStorage.getItem("token"));
       // props.getListUsers(token);
        if(props.user.action === types.GET_LIST_USER_SUCCESS){
            setUsers(props.user.users);
        }

    },[props.user.action])
    
    
    const onEdit = event =>{
        console.log(2);
    }
    const classes = useStyles();

        return (
            <div>
                 <Grid container  spacing={2} 
                        className={classes.container}>
                    <Grid item xs={2}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={10}>
                        <Typography>Thêm người dùng</Typography>
                        <Container component="main"
                                    maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper}>
                       
                       
                        <div className={classes.form} >
                            <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Tên Đăng Nhập"
                            name="email"
                            autoComplete="email"
                          //  onChange={handleInputChange}
                           // onBlur={handleEmailValidation}
                            />
                            {/* {FormError(isEmailValid,errorEmailMessage)} */}

                            <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Mật Khẩu"
                            type="password"
                            id="password"
                           // onChange={handleInputChange}
                           // onBlur={handlePasswordValidation}

                            />
                            {/* {FormError(isPasswordValid,errorPasswordMessage)} */}

                    
                    
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                           // onClick={login}
                            >
                            Thêm 
                            </Button>
                           
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
                    </Grid>
                </Grid>
                
            </div>
        );
    
}

const mapStateToProps =(state)=>({
    user:state.user
  });
  const mapDispatchToProps = dispatch => {
    return {
       
    };
  };

export default  connect(mapStateToProps,mapDispatchToProps)(AddUser);