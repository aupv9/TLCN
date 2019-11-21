import React, {Component} from 'react';
import './style.scss';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../img/logo.jpg';
import ModalRegister from '../modal-register';
import ModalLogin from '../modal-login';

const useStyles = makeStyles(theme => ({

    header:{
      backgroundColor:"#fff",
      color: "rgba(0,0,0,.75)"
    },
    logo:{
      width:60,
      height:60
    },
    headerContainer:{
      flexGrow:1,
      marginLeft:50
    },
    home:{
      
    },
    contentHeader:{
      marginLeft:20,
      color: "rgba(0,0,0,.75)",
      fontWeight:700,
      fontSize:13,

    },
    textBtn:{
      fontWeight:700,
      textTransform:"uppercase",
      fontSize:14,
      color: "rgb(83, 146, 249)",
      fontFamily:"mallory,Helvetica Neue,Helvetica,Arial,sans-serif"
    }

}));
const Header =(props)=> {
 
  const classes = useStyles();

        return (
            <>   
                <AppBar position="static"
                       className={classes.header}>
                  <Toolbar>
                  {/* Logo header */}
                    <Link to={"/"}>
                      <img src={logo}
                          className={classes.logo}></img>
                    </Link>
                    {/* Navbar content */}
                    <Typography className={classes.headerContainer}>
                      <Link to={"/home"} 
                            className={classes.contentHeader}>
                        Trang chủ
                    </Link>
                    <Link to={"/tra-cuu-ve"} 
                            className={classes.contentHeader}>
                        Tra cứu vé
                    </Link>
                    <Link to={"/quan-ly-ve"} 
                            className={classes.contentHeader}>
                        Quản lý vé
                    </Link>
                    </Typography>

                {/* Login/register modal */}
                    <Button color="primary" data-toggle="modal" data-target="#registerModal">
                        <Typography className={classes.textBtn}>
                          TẠO TÀI KHOẢN
                        </Typography>
                    </Button>
                    <Button color="primary" data-toggle="modal" data-target="#loginModal">
                        <Typography className={classes.textBtn}>
                          ĐĂNG NHẬP
                        </Typography>
                    </Button>

                    <ModalRegister></ModalRegister>
                          {/*  Modal Login*/}
                    <ModalLogin></ModalLogin>
                  </Toolbar>
                </AppBar>           
            </>
        );
    
}

Header.propTypes = {};

export default Header;