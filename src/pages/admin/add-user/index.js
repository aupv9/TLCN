import React, { Component,useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../../../components/sidebar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Container from '@material-ui/core/Container';
import {connect} from "react-redux";
import {useHistory} from 'react-router-dom';
import * as types from '../../../redux/type';
import { toast ,ToastContainer} from 'react-toastify';
import FormGroup from '@material-ui/core/FormGroup';
import * as _ from 'lodash';
import {addUser} from '../../../redux/action/user';


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
          marginBottom:theme.spacing(2),
          width:"500px"
      },
      input:{
          width:"500px"
      }
  }));
const AddUser = (props)=> {

    //let history=useHistory();
    const [users,setUsers]=useState([]);
    const [roles,setRoles]=useState(["ROLE_USER"]);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [repassword,setRepassword]=useState("");

    
    useEffect(() => {

      //  const isAdmin=JSON.parse(localStorage.getItem("admin"));
        // if(!isAdmin){
        //     history.push("/");
        // }
        document.getElementById("footer").style.display="none";
        //const token=JSON.parse(localStorage.getItem("token"));
       // props.getListUsers(token);
        if(props.user.action === types.ADD_USER_SUCCESS){
            toast.success("Thêm thành công");
        //     setUsers(props.user.users);
        }
        if(props.user.action === types.ADD_USER_FAIL){
            toast.error("Thêm không thành công");
        }

    },[props.user.action])
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
    
    const setRole=event  =>{
      
        if(event.target.checked){
            setRoles(roles.concat(event.target.value));
        }
        if(!event.target.checked){
           
            setRoles(_.filter(roles, function(o) { return o !== event.target.value }));
        }
    }
    /**Random string  */
    const  randomString=(length, chars)=>{
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }
    const onAdd = event =>{
        const user={
            "_id":randomString(6,'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
            "username":email,
            "password":password,
            "roles":roles
        }
        const token = JSON.parse(localStorage.getItem("token"));
        props.addUser(user,token);

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
                                  maxWidth="md">
                        <CssBaseline />
                        <div className={classes.paper}>
                       
                       
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
                                    className={classes.input}
                                  onChange={handleInputChange}
                                //  onBlur={handleEmailValidation}
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
                                    className={classes.input}
                                   onChange={handleInputChange}
                                // onBlur={handlePasswordValidation}

                                    />
                            <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="repassword"
                                    label="Xác Nhận Mật Khẩu"
                                    type="password"
                                    id="repassword"
                                    className={classes.input}
                                   onChange={handleInputChange}
                                // onBlur={handlePasswordValidation}

                                    />
                          
                          <FormGroup row>
                                <FormControlLabel
                                    control={
                                    <Checkbox 
                                    //checked={state.checkedA} 
                                    onChange={setRole}
                                      />
                                    }
                                    value={"ROLE_EMPLOYEE"}
                                    label="Nhân Viên"
                                />
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                      //  checked={state.checkedB}
                                       onChange={setRole}
                                       value="ROLE_ADMIN"
                                        color="primary"
                                    />
                                    }
                                    label="Quản Trị"
                                />
                                {/* <FormControlLabel control={<Checkbox value="checkedC" />} label="Uncontrolled" />
                                <FormControlLabel disabled control={<Checkbox value="checkedD" />} label="Disabled" />
                                <FormControlLabel disabled control={<Checkbox checked value="checkedE" />} label="Disabled" /> */}
                            
                            </FormGroup>
                            
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.btnAdd}
                                onClick={onAdd}
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
                <ToastContainer position="top-right"
                    autoClose={1000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover></ToastContainer>
            </div>
        );
    
}

const mapStateToProps =(state)=>({
    user:state.user
  });
  const mapDispatchToProps = dispatch => {
    return {
        addUser:(user,token)=> dispatch(addUser(user,token))
    };
  };

export default  connect(mapStateToProps,mapDispatchToProps)(AddUser);