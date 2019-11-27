import React, { useState,useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import {connect} from "react-redux";
import {signup} from '../../redux/action/user';
import * as types from '../../redux/type';

const FormError=(isHidden,errorMessage) =>{
  if (isHidden) {return null;}
  return (
    <div className="form-warning"
        style={{color:"red"}} >
        {errorMessage}
    </div>
  )
}
const ModalRegister =(props)=>  {
    
      useEffect(() => {
        if(props.logUser.action === types.SIGN_UP_SUCCESS){
          setLogiSucces(true);
          document.getElementsByClassName("show")[0].classList.remove("show");
        }else{
          setLogiSucces(false);
        }
      });
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
        const user={
          username:email,
          password:password
        }
        props.registerUser(user);
      }
    return (
         <>
            {/* Modal Sign up */}
              <div>
                    {
                      !isLogiSucces?(
                          <div 
                             className="modal hide" 
                              id="registerModal" 
                              tabIndex={-1} 
                              role="dialog" 
                              aria-labelledby="myModalLabel" 
                              aria-hidden="true" >
                            <div className="modal-dialog" role="document">
                              {/*Content*/}
                              <div className="modal-content form-elegant">
                                {/*Header*/}
                                <div className="modal-header text-center">
                                  <h3 className="modal-title w-100 " 
                                      id="myModalLabel"><strong>Tạo tài khoản</strong></h3>
                                  <button type="button" 
                                          className="close" 
                                          data-dismiss="modal" 
                                          aria-label="Close"
                                          onclick={resetMessage}>
                                    <span aria-hidden="true"
                                           onclick={resetMessage}>×</span>
                                  </button>
                                </div>
                                {/*Body*/}
                                <div className="modal-body mx-4">
                                  {/*Body*/}
                                  <div className="md-form mb-2">
                                  <TextField
                                          id="email"                               
                                          className="form-control validate" 
                                          onChange={handleInputChange}
                                          onBlur={handleEmailValidation}
                                          margin="normal"
                                          name="email"
                                          placeholder="Nhập vào email ()"
                                     />
                                      {FormError(isEmailValid,errorEmailMessage)}
                                  </div>
                                  <div className="md-form mb-2">
                                      <TextField
                                          id="password"                               
                                          className="form-control validate" 
                                          onChange={handleInputChange}
                                          onBlur={handlePasswordValidation}
                                          margin="normal"
                                          name="password"
                                          type="password"
                                          placeholder="Nhập vào password"
                                        />
                                        {FormError(isPasswordValid,errorPasswordMessage)}
                                    
                                  </div>
                                  <div className="md-form pb-3">
                                      <TextField
                                        id="repassword"                               
                                        className="form-control validate" 
                                        onChange={handleInputChange}
                                        onBlur={handleRePasswordValidation}
                                        margin="normal"
                                        name="repassword"
                                        placeholder="Nhập lại password"
                                        type="password"
                                        />
                                         {FormError(isRePasswordValid,errorRePasswordMessage)}
                                  </div>
                                  <div className="text-center mb-3">
                                    <button type="button" className="btn blue-gradient btn-block btn-rounded z-depth-1a"
                                            onClick={register}>Đăng Ký</button>
                                  </div>
                                  <div className="row my-3 d-flex justify-content-center">
                                  </div>
                                </div>
                                {/*Footer*/}
                                <div className="modal-footer mx-5 pt-3 mb-1">
                                  <p className="font-small grey-text d-flex justify-content-end">Đã có tài khoản? 
                                  <a 
                                    data-toggle="modal"
                                    data-target="#loginModal" 
                                    className="blue-text ml-1"
                                    data-dismiss="modal" 
                                    aria-label="Close"
                                    >
                                      Đăng nhập</a></p>
                                </div>
                              </div>
                              {/*/.Content*/}
                            </div>
                          </div>
                                     
                      ):null
                    }
                         
              </div>          
        </>
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

export default connect(mapStateToProps,mapDispatchToProps)(ModalRegister);