import React, {Component} from 'react';
import './style.scss'
import DatePicker from "react-datepicker";
import * as LIST from '../../contants'
import "react-datepicker/dist/react-datepicker.css";
import ContentSearch from '../content-search/index'
import * as _ from "lodash";

class Home_Main extends Component {
    state = {
        startDate: new Date(),
        key:"",
        listProvince:LIST.LIST_PROVINCE,
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
    getElementId=(element)=>{
        return document.getElementById(element)
    }


    onSearch=(type,e)=>{
        const value=e.target.value;

        switch(type) {
            case 1:
                this.getElementId("listRe").classList.add("smartboxS")
                this.getElementId("listRe").classList.remove("smartboxE")
                break;
            case 2:
                this.getElementId("listRe").classList.remove("smartboxS")
                this.getElementId("listRe").classList.add("smartboxE")
                break;
        }

        if(value.length > 0 ){
            this.setState({
                key:this.state.key+value
            })
            document.getElementById("listRe").style.display="block"
        }else{
            document.getElementById("listRe").style.display="none"
            this.setState({key:""})

        }



    }
    offList=()=>{
        document.getElementById("listRe").style.display="none"
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
                                                        <h1 className="title">Book [ flights ] online</h1>
                                                        <h2 className="subTitle">Search and compare hundreds of travel
                                                            sites at once</h2>
                                                    </div>
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
                                                                            <input type="text" onChange={(e)=>this.onSearch(1,e)} onBlur={this.offList}
                                                                                   className="col-field" placeholder="Từ đâu?"/>
                                                                            <button id="switch-btn" className=""><i
                                                                                className="fas fa-exchange-alt"></i></button>
                                                                            <input type="text"  onChange={(e)=>this.onSearch(2,e)}
                                                                                   className="col-field"  placeholder="Đến đâu?"/>
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
                                               </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <div className="smartbox-air" style={{display:"none"}} id="listRe">
                    <ul className="list-box">
                        {

                            _.filter(LIST.LIST_PROVINCE,(o)=>{
                                return _.includes(o.NAME,this.state.key)
                            })
                                .map((item,key)=>{
                                return(
                                    <li key={key}>
                                        <i className="fas fa-bus"></i>
                                        <span>{item.NAME}</span>
                                    </li>
                                )
                            })
                        }
                        {/*<ContentSearch keySearch={this.state.key}></ContentSearch>*/}
                    </ul>
                </div>

            </>
        );
    }
}

Home_Main.propTypes = {};

export default Home_Main;