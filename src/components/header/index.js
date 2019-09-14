import React, {Component} from 'react';
import './style.scss';
import logo from '../../img/logo2.jpg';
import {Link} from 'react-router-dom';
import text from '../../img/text.jpg';

class Header extends Component {
    render() {
        return (
            <>
                <div className="common-layout-header">
                    <div className="keel-container">
                        <div className="header-wrapper">
                            <div className="header-grid keel-grid v-c-p">
                                <div className="col-logo">
                                        <img src={logo}
                                         className="logo-header"/>
                                         <Link  to={"/"}
                                                className={"logo"}>
                                            <img src={text}
                                                 className="logo-header"
                                                 style={{width:"100px"}}/>
                                        </Link>

                                </div>
                                <div className="col-nav">
                                    <nav className="common-layout-nav header">
                                        <ul className="v-c-p nav-grid mr-bt">
                                            <li className="col-grid">
                                                <Link to={"/"} >
                                                    Home
                                                </Link>
                                            </li>
                                            <li className="col-grid">
                                                <Link to={"/"}>
                                                    Quản lý vé
                                                </Link>
                                            </li>
                                            <li className="col-grid">
                                                <Link to={"/"}>
                                                    Tra Cứu Vé
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col-right mr-bt">
                                    <div className="right-grid keel-grid right">
                                        <div className="multi-lang">
                                            <div className="col-lang">
                                                <a className="dropdown-lang"
                                                onClick={()=>{}}>
                                                    <span className="flag-vn">&nbsp;</span>
                                                </a>
                                                <a className="dropdown-lang"
                                                   onClick={()=>{}}>
                                                    <span className="flag-usa">&nbsp;</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-login mr-bt">
                                            <div className="v-c-p section-buttons">
                                                <a className="ui-button login-button mr-bt">LOGIN</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

Header.propTypes = {};

export default Header;