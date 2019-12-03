import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {connect} from "react-redux";
import {setTicket} from '../../redux/action/ticket';


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
const Informationuser =()=> {
    const classes = useStyles();

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
      
    /**method đặt vé */
    const setTicket =()=>{

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

                                // onChange={handleInputChange}
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
                                // onChange={handleInputChange}
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
                                        onClick={setTicket}
                                    >
                                        Tiếp tục
                                    </Button>
                        </div>
                    </Paper>
                  </Grid>
            </Grid>
      </Container>    
    );
    
}
const mapStateToProps=(state)=>({
    user:state.user
});
const mapDispatchToProps = dispatch => {
    return {
        setTicket: (ticket) => {
            dispatch(setTicket(ticket));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Informationuser);