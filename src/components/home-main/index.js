import React, {Component} from 'react';
import './style.scss';
import * as LIST from '../../contants';
import "react-datepicker/dist/react-datepicker.css";
import * as _ from "lodash";
import FormSearchMain from "../form-search-main";

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
                                                        <h1 className="title">Book [ bus ] online</h1>
                                                        <h2 className="subTitle">Search and compare hundreds of travel
                                                            sites at once</h2>
                                                    </div>
                                                <FormSearchMain />
                                               </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <div className="smartbox-air"
                     style={{display:"none"}}
                     id="listRe">
                    <ul className="list-box"
                        id="listPro">
                       {
                            this.toSearch()?this.toSearch().map((item,key)=>{
                                    return(
                                        <li role="option"
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
                        {

                        }
                    </ul>
                </div>

            </>
        );
    }
}

Home_Main.propTypes = {};

export default Home_Main;