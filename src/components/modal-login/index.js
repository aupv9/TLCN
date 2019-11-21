import React, { Component } from 'react';

const ModalLogin =(props) => {

    return (
        <div>
        {/* Modal */}
        <div className="modal fade" id="loginModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            {/*Content*/}
            <div className="modal-content form-elegant">
              {/*Header*/}
              <div className="modal-header text-center">
                <h3 className="modal-title w-100" id="myModalLabel"><strong>Đăng nhập</strong></h3>
                <button type="button" 
                        className="close" 
                        data-dismiss="modal" 
                        aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              {/*Body*/}
              <div className="modal-body mx-4">
                {/*Body*/}
                <div className="md-form mb-5">
                  <input type="email" 
                  id="Form-email1"
                   className="form-control validate" />
                  <label data-error="wrong" 
                  data-success="right"
                   htmlFor="Form-email1">Nhập tên tài khoản</label>
                </div>
                <div className="md-form pb-3">
                  <input type="password" 
                          id="Form-pass1" 
                          className="form-control validate" />
                  <label data-error="wrong" 
                        data-success="right" 
                        htmlFor="Form-pass1">Nhập mật khẩu</label>
                  <p className="font-small blue-text d-flex justify-content-end">Quên <a href="#" className="blue-text ml-1">
                      mật khẩu?</a></p>
                </div>
                <div className="text-center mb-3">
                  <button type="button" 
                  className="btn blue-gradient btn-block btn-rounded z-depth-1a">Đăng nhập</button>
                </div>
                <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> hoặc đăng nhập với
                :</p>
                <div className="row my-3 d-flex justify-content-center">
                  {/*Facebook*/}
                  <button type="button" 
                  className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className="fab fa-facebook-f text-center" /></button>
                  {/*Twitter*/}
                  <button type="button" 
                  className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className="fab fa-twitter" /></button>
                  {/*Google +*/}
                  <button type="button" 
                  className="btn btn-white btn-rounded z-depth-1a"><i className="fab fa-google-plus-g" /></button>
                </div>
              </div>
              {/*Footer*/}
              <div className="modal-footer mx-5 pt-3 mb-1">
                <p className="font-small grey-text d-flex justify-content-end">Chưa có tài khoản? 
                <a 
                 className="blue-text ml-1"
                 data-toggle="modal" 
                 data-target="#registerModal"
                 data-dismiss="modal" 
                 aria-label="Close">
                    Đăng ký ngay</a></p>
              </div>
            </div>
            {/*/.Content*/}
          </div>
        </div>
        {/* Modal */}
      
      </div>
    );
            

}

export default ModalLogin;