import React, {Component} from 'react';
import './style.scss';
import logo from '../../img/logo.webp';
import {Link} from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <>
                <div id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-2 col-xs-6">
                                <div className="header-logo">
                                    <Link to={"/"}><img src={logo} className="logo"/></Link>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="header-nav">
                                    <ul className="nav-menu">
                                        <li>
                                            <Link to="/">Trang Chủ</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Tra Cứu Vé</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="header-user">
                                    <div id="dropdown-list-user">
                                        <Link to={"/"}><i className="fas fa-user"></i></Link>
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