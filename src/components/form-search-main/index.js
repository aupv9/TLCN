import React, {Component} from 'react';
import DatePicker from "react-datepicker";

class FormSearchMain extends Component {
    //* khởi tạo các biến local để xử lý
    //*
    state = {
        idStart:59,
        idEnd:85,
        position:true,
        nameStart:"",
        nameEnd:""
    };
    render() {
        return (
            <>
                <div className="form-section">
                    <div className="form-container">
                        <div className="base-form-search">
                            <div className={"form-header"}>
                                <div className="displayBlock">
                                    <button className="button-radio active-button-radio">Khứ hồi</button>
                                    <button  className="button-radio">Một chiều</button>
                                </div>
                            </div>
                            <div className="form-search-wrapper">
                                <div className="keel-grid">
                                    <div className="col-fields">
                                        <input onKeyDown={(e)=>this.onSearch(1,e)}
                                               type="text"
                                               onChange={(e)=>this.onSearch(1,e)}
                                               onBlur={this.offList}
                                               value={this.state.nameStart}
                                               className="col-field"
                                               placeholder="Từ đâu?"/>
                                        <button id="switch-btn"
                                                className=""
                                                onClick={this.onSwitch} >
                                            <i className="fas fa-exchange-alt"/>
                                        </button>
                                        <input type="text"
                                               onChange={(e)=>this.onSearch(2,e)}
                                               className="col-field"
                                               placeholder="Đến đâu?"
                                               onBlur={this.offList}
                                               value={this.state.nameEnd}/>
                                        <DatePicker className={"col-field"}
                                                    selected={this.state.startDate}
                                                    onChange={this.handleChange}
                                        />
                                        <button className="button-submit">Tìm Kiếm</button>
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

export default FormSearchMain;