import React, {Component, useState, useEffect} from 'react';
import './style.scss';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../img/logo.jpg';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {delTokenSession} from '../../redux/action/user';
import {connect} from "react-redux";


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
  
  const checkLogin=JSON.parse(localStorage.getItem("isLogin"));
  const [isLogin,setLogin]=useState(true);
  
  useEffect(() => {
    // if(JSON.parse(localStorage.getItem("token"))){
    //   props.setSession(props.user.token);
    // }
    setLogin(checkLogin);
    setuserName(JSON.parse(localStorage.getItem("name")));
  })

  useEffect(()=>{
      if(isLogin){
          setLogin(true);
          setuserName(JSON.parse(localStorage.getItem("name")));
      }else{
          setLogin(false);
          setuserName("");
      }
  },[props.user.token])
  const classes = useStyles();  
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [userName,setuserName]=useState("");
 /*Time */
 const [timeout,setTimeout] = useState(10000);
  const handleLogout=()=>{
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    localStorage.removeItem("isLogin");

    setLogin(false);
    props.delSession();

  }
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const timeOut = () => {
    if (timeout === 0) {
      alert("Time out! Please re-book ");
      props.history.goBack();
      window.location.reload();
    }
  };
useEffect(() => {
    let timer = setInterval(() => {
        const newCount = timeout - 1;
        setTimeout(newCount >= 0 ? newCount : timeOut());
      }, 1000);
    return () => {
        clearInterval(timer);
      };
})
  const handleClose = () => {
    setAnchorEl(null);
  };
   /*Format time  */
   const format= (time) =>{
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
    seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
}
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

                    
                   
                    {
                      isLogin?(
                        <div>
                      <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                      >
                        <AccountCircle />
                        <Typography className={classes.username}>
                            {userName}
                        </Typography>
                       
                      </IconButton>
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                      >
                        <MenuItem 
                          onClick={handleLogout}
                        >Đăng Xuất</MenuItem>
                      </Menu>
                    </div>
                      ):(
                        <div>
                        <Button color="primary"  href="/sign-in">
                            <Typography className={classes.textBtn}>
                              ĐĂNG NHẬP
                            </Typography>
                        </Button>
                        <Button color="primary" href="/sign-up">
                            <Typography className={classes.textBtn}>                       
                              TẠO TÀI KHOẢN
                            </Typography>
                        </Button>
                      </div>
                      )
                    }
                  </Toolbar>
                </AppBar>           
            </>
        );
}

Header.propTypes = {};

const mapStateToProps =(state)=>({
  user:state.user
});
const mapDispatchToProps = dispatch => {
  return {
    delSession:()=>{
      dispatch(delTokenSession());
    }
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Header);