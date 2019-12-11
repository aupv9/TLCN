import React from 'react';
import PropTypes from 'prop-types';
import {AppBar, Box, Paper, Table,
    TableBody, TableCell, TableHead,
     TableRow,Button,Typography} from "@material-ui/core";
import {Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import classnames from "classnames";
import StageSeat from "../paper-cho";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CloseIcon from '@material-ui/icons/Close';
import {connect} from "react-redux";
import { toast ,ToastContainer} from 'react-toastify';
import Location from '../../components/location';
import './style.scss';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import Informationuser from '../../components/information';
import NumberFormat from 'react-number-format';
import {putNull,selectCar,delCar} from "../../redux/action/car";

const useStyles =makeStyles({
    root:{
        width: '100%',
        overflowX: 'auto',
    },
    header:{
        fontSize:18
    },
    button:{
        width: "50px",
        position:"absolute",
        right:0
    }
})
const Car = (props) =>{

    //des props
    const {car,start,end,putNull,nhaXe,gioDi,noiDi,gioDen,noiDen,timer,time,loaiXe,index,arrSeat,lichtrinh}=props;
    const [activeTab,setActiveTabs]=React.useState('1');
    const [triggerShow,settriggerShow]=React.useState(false);
    const  toggle = tab => {
        if (activeTab !== tab) {
            setActiveTabs(tab);
        }
    }

    /*Close detail car*/
    const toggleCarByIcon= id =>{

        document.getElementById("carDetail-"+id).style.display="none";

    }
    /**/
    const toggleCarByWrapper = id =>{
        const wrapper=document.getElementsByClassName("detail-wrapper");
        for (let i=0; i<wrapper.length; i++) {
           wrapper[i].style.display="none";
        }
        document.getElementById("carDetail-"+id).style.display="block";
    }
    const resetCarInfo= ()=>{
        const carInfo=document.getElementsByClassName("infor-car");
        for (const car of carInfo) {
            car.classList.remove("seat-info-detail");
        }
    }
     /*Remove bg seat*/
    const resetSeat=()=>{
        const btnSeat=document.getElementsByClassName("MuiSvgIcon-root");
        for (let i=0; i<btnSeat.length; i++) {
            btnSeat[i].classList.remove("MuiSvgIcon-colorPrimary");
        }
    }

    // Open toggle seat
    const toggleSeatDetail = id =>{
        if(!triggerShow){
            if(props.user.token !== undefined && props.user.token || JSON.parse(localStorage.getItem("token")) !== null)
            {
                console.log(JSON.parse(localStorage.getItem("token")));
                /*Reset danh sách ghế trong redux */
                props.resetSeats();

                /*Reset background ghế */
                resetSeat();

                /*Ẩn đi thông tin xe */
                resetCarInfo();

                /* Select Car*/
                props.setCar(car);

                /*Set display của xe */
                document.getElementById("seat-detail-"+id).classList.add("seat-info-detail");
            }else{
                toast.warn("Phải đăng nhập sau đó mới tiến hành đặt chỗ !", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                  });
            }
            props.resetSeats();
            settriggerShow(!triggerShow);
        }else{
           /*Reset danh sách ghế trong redux */
           props.resetSeats();

           /*Reset background ghế */
           resetSeat();

           /*Ẩn đi thông tin xe */
           resetCarInfo();

           /*Del car */
           props.delCar();

           /*Set display của xe */
            document.getElementById("seat-detail-"+id).classList.remove("seat-info-detail");
            settriggerShow(!triggerShow);
        }


    }
    const classes = useStyles();
    return (
        <>
            <div className="cars-result"
                 style={{marginBottom:"10px",textAlign:"center"}}
                >
                <div className="result-wrapper">
                    <div className="result-inner">
                        <div className="grid-inner">
                            <div className="col-info">
                                <div className="main-info">
                                    <div className="cars-result-info">
                                        <ol className="cars">
                                            <li className="car">
                                                <div className="cars-result-lefinfo">
                                                    <div className="v-c-p">
                                                        <div className="col-field carrier">
                                                            <div className="top">
                                                                <i
                                                                    className="fas fa-bus"></i>
                                                                {/*<img src={item.hinhanh}*/}
                                                                {/*     alt="" />*/}
                                                            </div>
                                                            <div className="bottom">
                                                                {nhaXe}
                                                            </div>

                                                        </div>
                                                        <div className="col-field time-start">
                                                            <div className="top">
                                                                <div className="depart-time ">{gioDi}</div>
                                                            </div>
                                                            <div className="bottom">{noiDi}</div>
                                                        </div>
                                                        <div className="col-field route">
                                                            <div className="time">{timer}h{time}</div>
                                                            <div className="axis"></div>
                                                            <div style={{textAlign:"center",
                                                                marginTop:"10px",
                                                                textDecoration:"underline"
                                                               }}>
                                                                <a  style={{ color:"33A1D5"}}
                                                                   onClick={()=>toggleCarByWrapper(index)}>Chi tiết</a>
                                                            </div>
                                                        </div>
                                                        <div className="col-field time-end">
                                                            <div className="top">
                                                                <div className="depart-time ">{gioDen}</div>
                                                            </div>
                                                            <div className="bottom">{noiDen}</div>
                                                        </div>
                                                        <div className="col-field info-car">
                                                            <div className="type">{loaiXe}</div>
                                                        </div>
                                                        <div className="col-field detail">
                                                            <div className="top-row">
                                                                <img src={"https://img.icons8.com/ios-glyphs/30/000000/share.png"} />
                                                            </div>
                                                            <div className="show-detail">
                                                                <div className="dropdown-detail">
                                                                
                                                                </div>
                                                                <div className="button-detail">
                                                                    <button onClick={()=>toggleSeatDetail(index)}><span>Chọn Chỗ</span></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detail-wrapper"
                 id={`carDetail-`+index}
                 style={{marginBottom:'10px',display:'none'}}>
                <AppBar position="static">
                    <Button className={classes.button}
                            onClick={()=>toggleCarByIcon(index)}
                            ><CloseIcon onClick={()=>toggleCarByIcon(index)}/></Button>
                    <Box component="span"
                         m={5}>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active:activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}
                                >
                                    Chi tiết
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active:activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}
                                >
                                    Đánh Giá
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active:activeTab === '3' })}
                                    onClick={() => {toggle('3'); }}
                                >
                                    Hình Ảnh
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col sm="12">
                                        <Paper className={classes.root}>
                                            <Table className={classes.table}
                                                   aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell align="left"
                                                                   style={{fontSize:18,color:'#000',fontWeight:500}}>Thời gian đi</TableCell>
                                                        <TableCell align="left"
                                                                   style={{fontSize:18,color:'#000',fontWeight:500}}>Điểm đến</TableCell>
                                                        <TableCell align="left"
                                                                   style={{fontSize:18,color:'#000',fontWeight:500}}>Địa chỉ</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {lichtrinh.map((row,key) => (
                                                        <TableRow key={key}>
                                                            <TableCell align="left">{row.thoigiandi}</TableCell>
                                                            <TableCell align="left">{row.diemdi}</TableCell>
                                                            <TableCell align="left">{row.diachi}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </Paper>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col sm="12"
                                        style={{marginLeft:"-10px"}}>
                                        <h4>Tab 1 Contents</h4>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                    <Col sm="12">
                                        <h4>
                                           <AirlineSeatReclineNormalIcon  className={"MuiSvgIcon-colorPrimary"}
                                                        fontSize="large"/>
                                        </h4>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </Box>
                </AppBar>
            </div>
            <div id={`seat-detail-`+index}
                 className={"infor-car"}
                 style={{display:"none","marginBottom":"10px"}}>
                <Row>
                    <Col md="4"
                        style={{paddingLeft:"0px",paddingRight:"0px"}}
                        >
                        <StageSeat arrSeat={arrSeat}
                                    start={start}
                                    end={end}
                                    index={index}
                            />
                    </Col>
                    <Col md="4"
                         style={{paddingLeft:"0px",paddingRight:"0px"}}>
                        <Location  lichTrinh={lichtrinh}
                                    start={start}
                                    end={end}></Location>
                    </Col>
                    <Col md="4"
                        style={{paddingLeft:"0px",paddingRight:"0px"}}
                        >
                        <Informationuser />
                    </Col>
                </Row>
                <Row style={{marginTop:"2px",width:"1030px",height:"auto"}}>
                    <Col md="12">
                        <Paper style={{padding:"10px"}}>
                            <Row>
                                <Col md="6">
                                    <Typography >
                                        Số ghế:{
                                            props.seat.seat.map((item,index)=>{
                                                return(
                                                    <>
                                                        <span key={index}>
                                                            {item.MaGhe+" "}
                                                        </span>
                                                    </>
                                                );
                                            })
                                        }
                                    </Typography>
                                    <Typography>
                                        Tổng tiền:
                                    <NumberFormat thousandSeparator={false}
                                              style={{border:"none"}}
                                              value={props.seat.priceSeats}
                                               suffix={".000đ"}
                                              defaultValue={"0đ"}
                                              isAllowed={true}/>
                                    </Typography>

                                </Col>
                                <Col md="6">
                                    <Typography>
                                        Điểm đi:{
                                            props.user.locationStart?props.user.locationStart:""
                                        }
                                    </Typography>
                                    <Typography>
                                        Điểm đến:{
                                            props.user.locationEnd?props.user.locationEnd:""
                                        }
                                    </Typography>
                                </Col>

                            </Row>

                        </Paper>
                    </Col>
                </Row>
            </div>
            <ToastContainer position="top-right"
                    autoClose={1000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover></ToastContainer>
         </>
    );
}
//putNull,nhaXe,gioDi,noiDi,gioDen,noiDen,timer,time,loaiXe,index,arrSeat,lichtrinh
Car.propTypes = {
    putNull:PropTypes.func.isRequired
};

const mapStateToProps =(state)=>({
    user:state.user,
    seat:state.seat
});
const mapDispatchToProps = dispatch => {
    return{
        resetSeats:()=>{
            dispatch(putNull());
        },
        setCar:(car)=>{
            dispatch(selectCar(car));
        },
        delCar:()=>{
            dispatch(delCar());
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Car);
