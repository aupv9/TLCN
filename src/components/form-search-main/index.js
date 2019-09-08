import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import * as LIST from "../../contants";
import * as _ from "lodash";

class FormSearchMain extends Component {
    //* khởi tạo các biến local để xử lý
    //*
    state = {
        startDate: new Date(),
        key:"",
        listProvince:LIST.LIST_PROVINCE,
        idStart:59,
        idEnd:85,
        position:true,
        nameStart:"",
        nameEnd:""
    };
    /*method set lại date */
    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
    /*get element theo Id*/
    getElementId=(element)=>{
        // eslint-disable-next-line no-undef
        return document.getElementById(element);


    }

    /*Khi nhập vào điểm đi và điểm đến
    set lại các giá trị của state để biết đang tìm để đi hay điểm đến
    và reset value của input search
    * type 1 là điểm đi 2 là điểm đến
    * */
    onSearch=(type,e)=>{
        let value=e.target.value;
        switch(type) {
            case 1:
                this.setState(
                    {
                        position:true,
                        nameStart:value
                    })
                /*
                *   khi nhập vào search box điểm đi show ra list đia điểm
                * */
                this.getElementId("listRe").classList.add("smartboxS")
                this.getElementId("listRe").classList.remove("smartboxE")
                break;
            case 2:
                /*Nhập vào search box điểm đi show ra list địa điểm
                * */
                this.setState({position:false,  nameEnd:value})
                this.getElementId("listRe").classList.remove("smartboxS")
                this.getElementId("listRe").classList.add("smartboxE")
                break;
        }
        /*
        * khi giá trị nhập vào khác rỗng set lại state key để thực hiện việc search trong list địa điểm
        * */
        if(value.length > 0 && value !== ""){
            this.setState({
                key:value.trim()
            })
            // eslint-disable-next-line no-undef
            document.getElementById("listRe").style.display="block";
        }else{
            // eslint-disable-next-line no-undef
            document.getElementById("listRe").style.display="none"
            this.setState({key:""});
        }
    }
    /*
    * khi nhấp chuột ra khỏi input sẽ ẩn đi list địa điểm
    * */
    offList=()=>{
        document.getElementById("listRe").style.display="none";
    }

    /*
    * method tìm kiếm thông qua key
    * */
    toSearch=()=>{
        return  _.filter(LIST.LIST_PROVINCE,(o)=>{
            return _.includes(o.NAME,this.state.key.toLowerCase());
        });
    }
    /*
    * Khi chọn địa điểm sẽ set state địa điểm đi và đến
    * */
    setIdPro=(e)=>{
        let name=e.target.dataset.name;
        let id=e.target.dataset.id
        if(this.state.position){
            this.setState({
                nameStart:name,
                idStart:id
            });
        }else{
            this.setState({
                nameEnd:name,
                idEnd:id
            });
        }
    }
    /*
    * Chuyển vị trí đ điểm đi và đến
    * */
    // eslint-disable-next-line no-unused-vars
    onSwitch=()=>{
        let start=this.state.nameStart;
        let idStart=this.state.idStart
        this.setState(
            {
                nameStart:this.state.nameEnd,
                nameEnd:start,
                idStart: this.state.idEnd,
                idEnd:idStart
            }
        )
        console.log(this.state.idStart,this.state.idEnd);
    }

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