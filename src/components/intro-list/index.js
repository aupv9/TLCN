import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './style.scss';

/*
* Component IntroList
* dùng render giao diện thanh intro
*@author AuPhan
* */

class IntroList extends Component {
    render() {
        return (
            <div>
                <div id="list-main">
                    <div id="intro-list">
                        <div className="container">
                            <div className="col-md-12 col-sm-12 col-xs-12 ">
                                <div className="row">
                                    <div className="col-md-6 hidden-sm hidden-xs">
                                        <h1 className="title-intro">
                                            <span className="hidden-sm hidden-xs">Vé xe từ</span>
                                        </h1>
                                    </div>
                                    <div className="col-md-6 hidden-sm hidden-xs">
                                        <h6 className="mt0 route-title hidden-sm hidden-xs route-title-bus-ticket"
                                                style={{float:'right'}}>
                                            <span className="mt0 mb0 text-gray">
                                                <Link to={"/"}>Vé Xe Khách</Link>
                                                >
                                                <Link to={"/"}>Xe đi </Link>
                                            </span>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IntroList;