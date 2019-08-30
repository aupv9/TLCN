import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import {Link}from 'react-router-dom'
class Footer extends Component {
    render() {
        return (
            <>
                {/* Footer */}
                <div id="footer">
                    <div className="container">
                        <footer className="page-footer font-small blue pt-4">
                            {/* Footer Links */}
                            <div className="container-fluid text-center text-md-left">
                                {/* Grid row */}
                                <div className="row">
                                    {/* Grid column */}
                                    <div className="col-md-6 mt-md-0 mt-3">
                                        {/* Content */}
                                        <h5 className="text-uppercase">VỀ CHÚNG TÔI</h5>
                                        <ul className="list-unstyled">
                                            <li>
                                                <Link to="\">Về Chúng Tôi</Link>
                                            </li>
                                            <li>
                                                <Link  to="\">Về Chúng Tôi</Link>
                                            </li>
                                            <li>
                                                <Link  to="\">Về Chúng Tôi</Link>
                                            </li>
                                            <li>
                                                <Link  to="\">Về Chúng Tôi</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Grid column */}
                                    <hr className="clearfix w-100 d-md-none pb-3" />
                                    {/* Grid column */}
                                    <div className="col-md-3 mb-md-0 mb-3">
                                        {/* Links */}
                                        <h5 className="text-uppercase">HỖ TRỢ</h5>
                                        <ul className="list-unstyled">
                                            <li>
                                                <Link to="\">Về Chúng Tôi</Link>
                                            </li>
                                            <li>
                                                <Link to="\">Về Chúng Tôi</Link>
                                            </li>
                                            <li>
                                                <Link to="\">Về Chúng Tôi</Link>
                                            </li>
                                            <li>
                                                <Link to="\">Về Chúng Tôi</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Grid column */}
                                    {/* Grid column */}
                                    <div className="col-md-3 mb-md-0 mb-3">
                                        {/* Links */}
                                        <h5 className="text-uppercase">PHƯƠNG THỨC THANH TOÁN</h5>
                                        <ul className="list-unstyled">
                                            <li>
                                                <Link to="\">Về Chúng Tôi</Link>
                                            </li>
                                            <li>
                                                <Link to="\">Về Chúng Tôi</Link>
                                            </li>
                                            <li>
                                                <Link to="\">Về Chúng Tôi</Link>
                                            </li>
                                            <li>
                                                <Link to="\">Về Chúng Tôi</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Grid column */}
                                </div>
                                {/* Grid row */}
                            </div>
                            {/* Footer Links */}
                            {/* Copyright */}
                            <div className="footer-copyright text-center py-3">© 2019 Copyright:
                                <a href="https://mdbootstrap.com/education/bootstrap/"> VEXE.COM</a>
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