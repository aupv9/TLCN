import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker/es";
import * as LIST from '../../contants'


class NavTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    listHCM=()=>{
        return LIST.LIST_HCM_LEFT.map((item,key)=>{
            return (
                <li key={key}>
                    <a href={item.URL}><span className="route fl"><small>{item.start} →</small> {item.end}</span></a>
                    <span className="price fl">{item.price}</span>
                    <DatePicker id="departDate"
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                    />
                </li>
            )
        })
    }

    render() {

        return (
            <>
                <div id="nav-tab">
                    <div className="container">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#hcm" role="tab"
                                       aria-controls="home" aria-selected="true">Hồ Chí Minh</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#dn" role="tab"
                                       aria-controls="profile" aria-selected="false">Đà Nẵng</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#ct" role="tab"
                                       aria-controls="contact" aria-selected="false">Cần Thơ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#nt" role="tab"
                                       aria-controls="contact" aria-selected="false">Nha Trang</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#dl" role="tab"
                                       aria-controls="contact" aria-selected="false">Đà Lạt</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="hcm" role="tabpanel"
                                     aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6 pl0 pr0">
                                            <ul className="routes-list">
                                                {
                                                    this.listHCM()
                                                }
                                            </ul>
                                        </div>
                                        <div className="col-md-6 pl0 pr0">
                                            <ul className="routes-list">
                                                <li>
                                                    <a href="/vi-VN/ve-xe-khach-tu-sai-gon-di-mui-ne-binh-thuan-129t27071.html"><span className="route fl"><small>Sài Gòn →</small> Mũi Né</span></a>
                                                    <span className="price fl">120.000 ₫/vé</span>
                                                    <DatePicker id="departDate"
                                                                selected={this.state.startDate}
                                                                onChange={this.handleChange}
                                                    />
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="dn" role="tabpanel" aria-labelledby="profile-tab">2</div>
                                <div className="tab-pane fade" id="ct" role="tabpanel" aria-labelledby="contact-tab">3</div>
                                <div className="tab-pane fade" id="nt" role="tabpanel" aria-labelledby="profile-tab">2</div>
                                <div className="tab-pane fade" id="dl" role="tabpanel" aria-labelledby="contact-tab">3</div>
                            </div>

                    </div>

                </div>

            </>
        );
    }
}

NavTab.propTypes = {};

export default NavTab;