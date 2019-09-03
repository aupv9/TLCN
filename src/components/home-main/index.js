import React, {Component} from 'react';
import './style.scss'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
class Home_Main extends Component {
    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
    onSearch=(type,e)=>{
        const value=e.target.value;
        switch (type ) {
            case type === 1:

        }
        if(value.length > 0 ){
            document.getElementById("listRe").style.display="block"
        }else{
            document.getElementById("listRe").style.display="none"
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
                                                                            <input type="text"  className="col-field"  placeholder="Đến đâu?"/>
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
                        <li>
                            <i className="fas fa-bus"></i>
                            <span>San Francisco, CA, Mỹ - San Francisco (SFO)</span>
                        </li>
                        <li>2</li>
                        <li>3</li>

                    </ul>
                </div>

            </>
        );
    }
}

Home_Main.propTypes = {};

export default Home_Main;