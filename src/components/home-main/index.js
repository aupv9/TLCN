import React, {Component} from 'react';
import './style.scss';
import * as LIST from '../../contants';
import "react-datepicker/dist/react-datepicker.css";
import * as _ from "lodash";
import DatePicker from "react-datepicker";
/*
* Component Home_Main
* used render trang chủ của website
* @author AuPhan
* */

class Home_Main extends Component {

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
    onSearch= type => event=>{
        let value= event.target.value;
        switch(type) {
            case 1:
                this.setState(
                    {
                        position:true,
                        nameStart:value
                    });
                /*
                *   khi nhập vào search box điểm đi show ra list đia điểm
                * */
                this.getElementId("listRe").classList.add("smartboxS");
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
        this.setState({
            key:value.trim()
        });
        document.getElementById("listRe").style.display="block";

        // if(value.length > 0 ){
        //     this.setState({
        //         key:value.trim()
        //     });
        //     document.getElementById("listRe").style.display="block";
        // }else{
        //     document.getElementById("listRe").style.display="none";
        //     this.setState({key:""});
        // }
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
            return _.includes(o.NAME.toLowerCase(),this.state.key.toLowerCase());
        });
    }
    /*
    * Khi chọn địa điểm sẽ set state địa điểm đi và đến
    * */
    setIdPro=(e)=>{
        let nameAddress=e.target.dataset.name;
        let idAddress=e.target.dataset.id
        if(this.state.position){
            this.setState({
                nameStart:nameAddress,
                idStart:idAddress
            });
        }else{
            this.setState({
                nameEnd:nameAddress,
                idEnd:idAddress
            });
        }
    }
    /*
    * Chuyển vị trí đ điểm đi và đến
    * */
    onSwitch=()=>{
        let start=this.state.nameStart;
        let idStart=this.state.idStart
        this.setState( state=>
                ({
                    nameStart:this.state.nameEnd,
                    nameEnd:start,
                    idStart: this.state.idEnd,
                    idEnd:idStart
                })
        );
    }

    /*
    * Method dùng để tìm kiếm xe
    * @param idStart mã tỉnh đi
    * @param idEnd mã tỉnh đến
    * @param date ngày đi
    * */
    onSearchCars =()=>{
        let month=parseInt(this.state.startDate.getMonth())+1;
        let date=this.state.startDate.getDate()+"-"+month+"-"+this.state.startDate.getFullYear();
        this.props.history.push(`/list-xe/${this.state.idStart}/${this.state.idEnd}/${date}`);
    }
    render() {
        return (
            <>
                <main className="pageContent keel-agd">
                    <div className="SearchPage__FrontDoor">
                        <div className="base-front-door keel-agd">
                            <div className="coverPhotoContainer">
                                <div className="Common-Frontdoor-CoverPhoto challenger-cover-photo">
                                    <div className="background-wrapper">
                                        <div className="coverBackground">
                                            <div className={"primary-content"}>
                                               <section className="title-section">
                                                    <div className="section-container ">
                                                        <h1 className="title">Đặt vé xe online</h1>
                                                        <h2 className="subTitle"></h2>
                                                    </div>
                                                   <div className="form-section">
                                                       <div className="form-container">
                                                           <div className="base-form-search">
                                                               <div className={"form-header"}>
                                                                   <div className="displayBlock">
                                                                       <button
                                                                           className="button-radio active-button-radio">Khứ hồi</button>
                                                                       <button
                                                                           className="button-radio">Một chiều</button>
                                                                   </div>
                                                               </div>
                                                               <div className="form-search-wrapper">
                                                                   <div className="keel-grid">
                                                                       <div className="col-fields">
                                                                           <input
                                                                                  type="text"
                                                                                  onChange={this.onSearch(1)}
                                                                                  onBlur={this.offList}
                                                                                  value={this.state.nameStart}
                                                                                  className="col-field"
                                                                                  placeholder="Từ đâu?"/>
                                                                                 <div className="smartbox-air"
                                                                                        style={{display:"none"}}
                                                                                        id="listRe">
                                                                                        <ul className="list-box"
                                                                                            id="listPro">
                                                                                        {
                                                                                           
                                                                                                this.toSearch()?this.toSearch().map((item,key)=>{
                                                                                                    console.log(item);
                                                                                                        return(
                                                                                                            <li 
                                                                                                                style={{color:"black"}}
                                                                                                                role="option"
                                                                                                                onMouseDown={this.setIdPro}
                                                                                                                data-id={item.MA}
                                                                                                                data-name={item.NAME}
                                                                                                                key={key}
                                                                                                                id={`station-`+item.MA}
                                                                                                                className="" >
                                                                                                                <i  onMouseDown={this.setIdPro}
                                                                                                                    data-id={item.MA}
                                                                                                                    data-name={item.NAME}
                                                                                                                    className="fas fa-bus"></i>
                                                                                                                <span  onMouseDown={this.setIdPro}
                                                                                                                    data-id={item.MA}
                                                                                                                    data-name={item.NAME} >{item.NAME}
                                                                                                                    </span>
                                                                                                            </li>
                                                                                                        );
                                                                                                    }):this.offList()
                                                                                            }
                                                                                        </ul>
                                                                            </div>
                                                                           <button id="switch-btn"
                                                                                   className=""
                                                                                   onClick={this.onSwitch} >
                                                                               <i className="fas fa-exchange-alt"/>
                                                                           </button>
                                                                           <input type="text"
                                                                                  onChange={this.onSearch(2)}
                                                                                  className="col-field"
                                                                                  placeholder="Đến đâu?"
                                                                                  onBlur={this.offList}
                                                                                  value={this.state.nameEnd}/>
                                                                                  <div className="smartbox-air"
                                                                                        style={{display:"none"}}
                                                                                        id="listRe">
                                                                                        <ul className="list-box"
                                                                                            id="listPro">
                                                                                        {
                                                                                           
                                                                                                this.toSearch()?this.toSearch().map((item,key)=>{
                                                                                                    console.log(item);
                                                                                                        return(
                                                                                                            <li 
                                                                                                                style={{color:"black"}}
                                                                                                                role="option"
                                                                                                                onMouseDown={this.setIdPro}
                                                                                                                data-id={item.MA}
                                                                                                                data-name={item.NAME}
                                                                                                                key={key}
                                                                                                                id={`station-`+item.MA}
                                                                                                                className="" >
                                                                                                                <i  onMouseDown={this.setIdPro}
                                                                                                                    data-id={item.MA}
                                                                                                                    data-name={item.NAME}
                                                                                                                    className="fas fa-bus"></i>
                                                                                                                <span  onMouseDown={this.setIdPro}
                                                                                                                    data-id={item.MA}
                                                                                                                    data-name={item.NAME} >{item.NAME}
                                                                                                                    </span>
                                                                                                            </li>
                                                                                                        );
                                                                                                    }):this.offList()
                                                                                            }
                                                                                        </ul>
                                                                            </div>
                                                                           <DatePicker className={"col-field"}
                                                                                       selected={this.state.startDate}
                                                                                       onChange={this.handleChange}

                                                                           />
                                                                           <button className="button-submit"
                                                                                     style={{width:"120px"}}
                                                                                    onClick={this.onSearchCars}>Tìm Kiếm</button>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
               
            </>
        );
    }
}

Home_Main.propTypes = {};

export default  (Home_Main);
