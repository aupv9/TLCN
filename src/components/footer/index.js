import React, {Component} from 'react';
import './style.scss';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import {Link}from 'react-router-dom';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Fab from "@material-ui/core/Fab";
/*
    Modify footer page
    * @author Vietk
 */


class Footer extends Component {


    scrollTop = () =>{
        window.scrollTo(0, 0);
    };
    constructor() {
        super();
        this.state = {
            intervalId: 0,
            thePosition: false
        };
    }



    //
    componentDidMount() {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 10) {
                this.setState({ thePosition: true });
            } else {
                this.setState({ thePosition: false });
            }
        });
        window.scrollTo(0, 0);
    }

    onScrollStep = () => {
        if (window.pageYOffset === 0){
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
    };

    scrollToTop = () => {
        let intervalId = setInterval(this.onScrollStep, 16);
        this.setState({
            intervalId: intervalId
        });
    };

    renderGoTopIcon = () => {
        if (this.state.thePosition){
            return (
                <div
                    className="go-top"
                     onClick={this.scrollToTop}>
                    <ArrowDropUpIcon> </ArrowDropUpIcon>
                </div>
            );
        }
    }

    render() {

        return (
            <> {/* Footer */}
                <div id="footer">


                    <div  className="container">
                        <footer color={"blue"}
                                className="page-footer font-sma ll blue pt-4">
                            {/* Footer Links */}
                            <div className="container-fluid text-center text-md-left">


                                <div className={"row"}>

                                    <React.Fragment>
                                        {this.renderGoTopIcon()}
                                    </React.Fragment>

                                </div>

                                {/*/!* Grid row *!/*/}
                                {/*<div className="row">*/}
                                {/*    /!* Grid column *!/*/}
                                {/*    <div className="col-md-6 mt-md-0 mt-3">*/}
                                {/*        /!* Content *!/*/}
                                {/*            /!*<h5 className="text-uppercase">VỀ CHÚNG TÔI</h5>*!/*/}
                                {/*            /!*<ul className="list-unstyled">*!/*/}
                                {/*            /!*    <li>*!/*/}
                                {/*            /!*        <Link to="\">Về Chúng Tôi</Link>*!/*/}
                                {/*            /!*    </li>*!/*/}
                                {/*            /!*    <li>*!/*/}
                                {/*            /!*        <Link  to="\">Về Chúng Tôi</Link>*!/*/}
                                {/*            /!*    </li>*!/*/}
                                {/*            /!*    <li>*!/*/}
                                {/*            /!*        <Link  to="\">Về Chúng Tôi</Link>*!/*/}
                                {/*            /!*    </li>*!/*/}
                                {/*            /!*    <li>*!/*/}
                                {/*            /!*        <Link  to="\">Về Chúng Tôi</Link>*!/*/}
                                {/*            /!*    </li>*!/*/}
                                {/*            /!*</ul>*!/*/}
                                {/*    </div>*/}
                                {/*    /!* Grid column *!/*/}
                                {/*    <hr className="clearfix w-100 d-md-none pb-3" />*/}
                                {/*    /!* Grid column *!/*/}
                                {/*    <div className="col-md-3 mb-md-0 mb-3">*/}
                                {/*        /!* Links *!/*/}
                                {/*        <h5 className="text-uppercase">HỖ TRỢ</h5>*/}
                                {/*        <ul className="list-unstyled">*/}
                                {/*            <li>*/}
                                {/*                <Link to="\">Về Chúng Tôi</Link>*/}
                                {/*            </li>*/}
                                {/*            <li>*/}
                                {/*                <Link to="\">Về Chúng Tôi</Link>*/}
                                {/*            </li>*/}
                                {/*            <li>*/}
                                {/*                <Link to="\">Về Chúng Tôi</Link>*/}
                                {/*            </li>*/}
                                {/*            <li>*/}
                                {/*                <Link to="\">Về Chúng Tôi</Link>*/}
                                {/*            </li>*/}
                                {/*        </ul>*/}
                                {/*    </div>*/}
                                {/*    /!* Grid column *!/*/}
                                {/*    /!* Grid column *!/*/}
                                {/*    <div className="col-md-3 mb-md-0 mb-3">*/}
                                {/*        /!* Links *!/*/}
                                {/*        <h5 className="text-uppercase">PHƯƠNG THỨC THANH TOÁN</h5>*/}
                                {/*        <ul className="list-unstyled">*/}
                                {/*            <li>*/}
                                {/*                <Link to="\">Về Chúng Tôi</Link>*/}
                                {/*            </li>*/}
                                {/*            <li>*/}
                                {/*                <Link to="\">Về Chúng Tôi</Link>*/}
                                {/*            </li>*/}
                                {/*            <li>*/}
                                {/*                <Link to="\">Về Chúng Tôi</Link>*/}
                                {/*            </li>*/}
                                {/*            <li>*/}
                                {/*                <Link to="\">Về Chúng Tôi</Link>*/}
                                {/*            </li>*/}
                                {/*        </ul>*/}
                                {/*    </div>*/}
                                {/*    /!* Grid column *!/*/}
                                {/*</div>*/}
                                {/*/!* Grid row *!/*/}
                            </div>
                            {/* Footer Links */}
                            {/* Copyright */}
                            <div className="footer-copyright text-center py-3"
                                 style={{height:"200px"}}>
                              © 2019 Copyright:
                                <a href="https://mdbootstrap.com/education/bootstrap/"
                                   className={"text-white"}>
                                    VEXE.COM
                                </a> <span> </span>
                                 {/* Made With
                                <i className={"fas fa-heart text-danger"}>  </i>
                                    by
                                <span className={"text-success"}> Our Team</span> */}

                            </div>
                            {/* Copyright */}
                        </footer>
                        {/* Footer */}
                    </div>
                </div>


            </>
        );
    }
}

Footer.propTypes = {};

export default Footer;