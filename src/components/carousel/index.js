import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import DatePicker from "react-datepicker";
import {Link} from'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";

class Carousel extends Component {
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
    click= ()=>{
        fetch("http://localhost:8080/DatVe_war/api/")
            .then(res => res.json())
            .then(res =>{
                console.log(res)
            })
        console.log(this.state.startDate.getDate().toString()+"-"+
            this.state.startDate.getMonth().toString()+"-" +this.state.startDate.getFullYear().toString())
    }
    render() {
        return (
            <>
                <div id="main">
                <div className="carousel">
                </div>
                <div className="container">
                    <div className="row">
                        <div className="search-box col-12">
                            <div className="search-content">
                                <div className="location">
                                    <input type={"text"} placeholder={"Gõ vào nơi đi"} id="ip-start"></input>
                                    <button id="switch-btn"><img src={"https://storage.googleapis.com/fe-production/images/header/swap.svg"}/></button>
                                    <input type={"text"} placeholder={"Gõ vào nơi đến"} id="ip-end"></input>
                                </div>
                                <div className="date">
                                    <DatePicker id="departDate"
                                                selected={this.state.startDate}
                                                onChange={this.handleChange}
                                    />
                                    <button className="btn-day">Hôm Nay</button>
                                    <button className="btn-day">Ngày Mai</button>
                                </div>
                                <button id="searchSubmit" onClick={this.click}>Tìm Vé Xe</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </>
        );
    }
}

Carousel.propTypes = {};

export default Carousel;