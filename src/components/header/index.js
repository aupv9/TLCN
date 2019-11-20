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

const useStyles = makeStyles(theme => ({

    header:{
      backgroundColor:"#fff",
      color: "rgba(0,0,0,.75)",
      display:"flex",
      fontFamily:"Helvetica,Arial,sans-serif"
    },
    logo:{
      width:70,
      height:70
    },
    headerContainer:{
      flexGrow:1,
      marginLeft:50
    },
    home:{
      
    },
    contentHeader:{
      marginLeft:10,
      color: "rgba(0,0,0,.75)",
      fontWeight:700,
      fontSize:13
    },
    textBtn:{
      fontweight:500
    }

}));
const Header =(props)=> {
 
  const classes = useStyles();

        return (
            <>   
                <AppBar position="static"
                       className={classes.header}>
                  <Toolbar>
                    <img src={logo}
                         className={classes.logo}></img>
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

                      {/* Modal Sign up */}
                      <div>
                          {/* Modal */}
                          <div className="modal fade" id="registerModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                              {/*Content*/}
                              <div className="modal-content form-elegant">
                                {/*Header*/}
                                <div className="modal-header text-center">
                                  <h3 className="modal-title w-100 " id="myModalLabel"><strong>Tạo tài khoản</strong></h3>
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                {/*Body*/}
                                <div className="modal-body mx-4">
                                  {/*Body*/}
                                  <div className="md-form mb-5">
                                    <input type="email" id="Form-email1" className="form-control validate" />
                                    <label data-error="wrong" data-success="right" htmlFor="Form-email1">Your email</label>
                                  </div>
                                  <div className="md-form pb-3">
                                    <input type="password" id="Form-pass1" className="form-control validate" />
                                    <label data-error="wrong" data-success="right" htmlFor="Form-pass1">Your password</label>
                                    <p className="font-small blue-text d-flex justify-content-end">Forgot <a href="#" className="blue-text ml-1">
                                        Password?</a></p>
                                  </div>
                                  <div className="text-center mb-3">
                                    <button type="button" className="btn blue-gradient btn-block btn-rounded z-depth-1a">Sign in</button>
                                  </div>
                                  <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in
                                    with:</p>
                                  <div className="row my-3 d-flex justify-content-center">
                                    {/*Facebook*/}
                                    <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className="fab fa-facebook-f text-center" /></button>
                                    {/*Twitter*/}
                                    <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className="fab fa-twitter" /></button>
                                    {/*Google +*/}
                                    <button type="button" className="btn btn-white btn-rounded z-depth-1a"><i className="fab fa-google-plus-g" /></button>
                                  </div>
                                </div>
                                {/*Footer*/}
                                <div className="modal-footer mx-5 pt-3 mb-1">
                                  <p className="font-small grey-text d-flex justify-content-end">Not a member? <a href="#" className="blue-text ml-1">
                                      Sign Up</a></p>
                                </div>
                              </div>
                              {/*/.Content*/}
                            </div>
                          </div>
                          {/* Modal */}
                         
                        </div>
                          {/*  Modal Login*/}
                          <div>
                      {/* Modal */}
                      <div className="modal fade" id="loginModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                          {/*Content*/}
                          <div className="modal-content form-elegant">
                            {/*Header*/}
                            <div className="modal-header text-center">
                              <h3 className="modal-title w-100" id="myModalLabel"><strong>Đăng nhập</strong></h3>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                              </button>
                            </div>
                            {/*Body*/}
                            <div className="modal-body mx-4">
                              {/*Body*/}
                              <div className="md-form mb-5">
                                <input type="email" id="Form-email1" className="form-control validate" />
                                <label data-error="wrong" data-success="right" htmlFor="Form-email1">Your email</label>
                              </div>
                              <div className="md-form pb-3">
                                <input type="password" id="Form-pass1" className="form-control validate" />
                                <label data-error="wrong" data-success="right" htmlFor="Form-pass1">Your password</label>
                                <p className="font-small blue-text d-flex justify-content-end">Forgot <a href="#" className="blue-text ml-1">
                                    Password?</a></p>
                              </div>
                              <div className="text-center mb-3">
                                <button type="button" className="btn blue-gradient btn-block btn-rounded z-depth-1a">Sign in</button>
                              </div>
                              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in
                                with:</p>
                              <div className="row my-3 d-flex justify-content-center">
                                {/*Facebook*/}
                                <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className="fab fa-facebook-f text-center" /></button>
                                {/*Twitter*/}
                                <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className="fab fa-twitter" /></button>
                                {/*Google +*/}
                                <button type="button" className="btn btn-white btn-rounded z-depth-1a"><i className="fab fa-google-plus-g" /></button>
                              </div>
                            </div>
                            {/*Footer*/}
                            <div className="modal-footer mx-5 pt-3 mb-1">
                              <p className="font-small grey-text d-flex justify-content-end">Not a member? <a href="#" className="blue-text ml-1">
                                  Sign Up</a></p>
                            </div>
                          </div>
                          {/*/.Content*/}
                        </div>
                      </div>
                      {/* Modal */}
                    
                    </div>
                  </Toolbar>
                </AppBar>           
            </>
        );
    
}

Header.propTypes = {};

export default Header;