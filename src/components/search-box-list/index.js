import React, {Component} from 'react';
import './style.scss';
import DatePicker from "react-datepicker";

class SearchBox extends Component {
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
    render() {
        return (
            <>
                <div id="search-box-list">
                    <div className="container">
                        <div className="row">
                            <div className="search-box-list col-12">
                                <div className="search-content">
                                    <div className="location">
                                        <input type={"text"}
                                               placeholder={"Gõ vào nơi đi"}
                                               id="ip-start"></input>
                                        <button id="switch-btn"><i
                                            className="fas fa-exchange-alt"
                                        ></i></button>
                                        <input type={"text"}
                                               placeholder={"Gõ vào nơi đến"}
                                               id="ip-end"></input>
                                    </div>
                                    <div className="date">
                                        <DatePicker id="departDate"
                                                    selected={this.state.startDate}
                                                    onChange={this.handleChange}
                                        />
                                        <button className="btn-day">Hôm Nay</button>
                                        <button className="btn-day">Ngày Mai</button>
                                    </div>
                                    <button id="btToday"
                                            type="button"
                                            className="fl btn btn-gray btn-today">Hôm nay
                                    </button>
                                    <button id="btTomorrow"
                                            type="button"
                                            className="fl btn btn-gray btn-tomorrow">
                                        Ngày mai
                                    </button>
                                    <button id="searchSubmit"
                                            onClick={this.click}>Tìm Vé Xe</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        );
    }
}

export default SearchBox;