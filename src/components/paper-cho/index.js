import React from 'react';
import PropTypes from 'prop-types';
import {
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Button
} from "@material-ui/core";
import {Col} from "reactstrap";
import Seat from "../seat";
import {connect} from "react-redux";
import classnames from "classnames";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CloseIcon from '@material-ui/icons/Close';
import {putNull} from "../../redux/action";



/*Style reactstrap*/
const useStyleBootstrap={
    marginTop:"10px"
}
const btnNext={
    marginTop:"10px",
    marginBottom:"10px",
    width:"300px",
    padding:"10px"

}
const inputStyle={
    width: "550px"
}
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
        right:"10px"
    }
})
const StageSeat =(props)=> {

    /*Map props*/
    const {seats,arrSeat,lichTrinh,start,end,index}=props;

    /*State activeTab*/
    const [activeTab,setActiveTabs]=React.useState('1');

    /*Xử Lý trước khi gán cho radio*/
    const [listAddressStart,setListAddressStart]=React.useState([]);
    const [listAddressEnd,setListAddressEnd]=React.useState([]);

    /*Value lưu điểm đi và điểm đến*/
    const [valueStart,setValueStart]=React.useState("");
    const [valueEnd,setValueEnd]=React.useState("");

    /*Method filter điểm đi và điểm đến*/
    const handleListStart = () =>{
        //Khởi tạo mảng lưu địa chỉ
        let arrStart=[],arrEnd=[];
        for(const item of lichTrinh){
            if(item.tinh === parseInt(start)){
                arrStart.push(item.thoigiandi+"-"+" "+item.diachi);
            }
            if(item.tinh === parseInt(end)){
                arrEnd.push(item.thoigiandi+"-"+item.diachi);
            }
        }
        setListAddressStart(arrStart);
        setListAddressEnd(arrEnd);
    }

    /*Lifecyle*/
    React.useEffect(()=>{
        handleListStart();
    },[]);

    /*Method select tab*/
    const  toggle = tab => {
        if (activeTab !== tab) {
            setActiveTabs(tab);
        }
    }
    /*Set value điểm đi*/
    const changeStart= event =>{
        setValueStart(event.target.value);
    }
    /*Set value điểm đến*/
    const changeEnd = event =>{
        setValueEnd(event.target.value);
    }

    /*Set Null Seat*/
    const setNullSeat=()=>{
        putNull();
    }
    /**/
    const validateName = value =>{

    }
    /*Submit form infomation*/
    const handleSubmit = event =>{
        event.preventDefault();
        console.log("submit");
    }

    const toggleCarByIcon = ()=>{
        document.getElementById("seat-detail-"+index).classList.remove("seat-info-detail");
        setNullSeat();
        removeBg();
    }
    /*Remove bg seat*/
    const removeBg=()=>{
        const btnSeat=document.getElementsByClassName("btn");
        for (let i=0; i<btnSeat.length; i++) {
            btnSeat[i].classList.remove("bg-primary");
        }
    }
    const classes = useStyles();
    /*Method tính tổng tiền đã đặt*/
        return (
            <>
                <Col md="12"
                    style={{marginLeft:"0"}}>
                    <Paper >
                        <Button className={classes.button}
                                onClick={()=>toggleCarByIcon()}
                        ><CloseIcon onClick={()=>toggleCarByIcon()}/></Button>
                        {/*Start header intro seat*/}
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="left">
                                        <Button style={{marginRight:"5px",
                                            backgroundColor:"#fff"}}></Button>
                                        Ghế Trống
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button  style={{marginRight:"5px",
                                            backgroundColor:"#cfcfcf"}}></Button>
                                        Ghế Đã Đặt
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button style={{marginRight:"5px",
                                            backgroundColor:"#007BFF"}}></Button>
                                        Ghế Đang Đặt
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        {/*    End header seat*/}
                        <Paper style={{padding:"40PX",borderBottomLeftRadius:"0"}}>
                            <Paper style={{marginLeft:"20px"}}>
                                {/*<Box style={{position:"absolute",bottom:"65%",left:"25px"}}>*/}
                                {/*    <img width="25"*/}
                                {/*         className="img-responsive wheel-img"*/}
                                {/*         src="https://storage.googleapis.com/fe-production/images/Route/steering-wheel.svg"/>*/}
                                {/*</Box>*/}
                                {/*Render danh sách ghế*/}
                                {
                                    arrSeat.map((item,index)=>
                                        <Seat seat={item}
                                    />
                                    )
                                }
                            </Paper>
                        </Paper>
                    </Paper>
                    {/*<Paper style={{marginTop:"5px",height:"100px"}}>*/}
                    {/*    <Typography>*/}
                    {/*        <Box textAlign="left"*/}
                    {/*             style={{paddingTop:"10px",paddingLeft:"20px"}}>*/}
                    {/*            Số ghế:*/}
                    {/*            {*/}
                    {/*                seats.seat.map((item,index) =>  (*/}
                    {/*                        <span >{item.MaGhe}{" "}</span>*/}
                    {/*                ))*/}
                    {/*            }<br/>*/}
                    {/*            Tổng Tiền:*/}
                    {/*            /!*{*!/*/}
                    {/*            /!*    this.props.seats.priceSeats*!/*/}
                    {/*            /!*}*!/*/}
                    {/*            <NumberFormat thousandSeparator={false}*/}
                    {/*                          style={{border:"none"}}*/}
                    {/*                           value={seats.priceSeats}*/}
                    {/*                           suffix={".000đ"}*/}
                    {/*                           defaultValue={"0đ"}*/}
                    {/*                          isAllowed={true}/>*/}
                    {/*        </Box>*/}
                    {/*    </Typography>*/}
                    {/*</Paper>*/}
                    {/*/!*<ToastContainer enableMultiContainer*!/*/}
                    {/*/!*                containerId={'messPutSeat'}*!/*/}
                    {/*/!*                position={toast.POSITION.BOTTOM_LEFT} />*!/*/}
                    {/*<Paper style={{marginTop:"5px"}}>*/}
                    {/*    <Typography style={{fontWeight:"500",fontSize:"20px",*/}
                    {/*        paddingLeft:"15px",paddingTop:"20px"}}>*/}
                    {/*        CHỌN NƠI ĐI VÀ NƠI ĐẾN*/}
                    {/*    </Typography>*/}
                    {/*    <Box>*/}
                    {/*        <Nav tabs*/}
                    {/*            style={{marginLeft:"50px",marginTop:"20px"}}>*/}
                    {/*            <NavItem>*/}
                    {/*                <NavLink*/}
                    {/*                    className={classnames({ active:activeTab === '1' })}*/}
                    {/*                    onClick={() => {toggle('1'); }}*/}
                    {/*                >*/}
                    {/*                    Điểm Đi*/}
                    {/*                </NavLink>*/}
                    {/*            </NavItem>*/}
                    {/*            <NavItem>*/}
                    {/*                <NavLink*/}
                    {/*                    className={classnames({ active:activeTab === '2' })}*/}
                    {/*                    onClick={() => { toggle('2'); }}*/}
                    {/*                        >*/}
                    {/*                    Điểm Đến*/}
                    {/*                </NavLink>*/}
                    {/*            </NavItem>*/}
                    {/*        </Nav>*/}
                    {/*        <TabContent activeTab={activeTab}>*/}
                    {/*            <TabPane tabId="1"*/}
                    {/*                     style={{marginLeft:"50px",marginTop:"20px"}}>*/}
                    {/*                <FormControl component="fieldset"*/}
                    {/*                             >*/}
                    {/*                    <FormLabel component="legend">Điểm Đón</FormLabel>*/}
                    {/*                    <RadioGroup aria-label="gender"*/}
                    {/*                                onChange={changeStart}*/}
                    {/*                               >*/}
                    {/*                        {*/}
                    {/*                            listAddressStart.map((item,index)=>{*/}
                    {/*                                return(*/}
                    {/*                                    <FormControlLabel*/}
                    {/*                                        key={index}*/}
                    {/*                                        value={item}*/}
                    {/*                                        control={<Radio/>}*/}
                    {/*                                        label={item}/>*/}
                    {/*                                );*/}
                    {/*                            })*/}
                    {/*                        }*/}

                    {/*                    </RadioGroup>*/}
                    {/*                </FormControl>*/}
                    {/*            </TabPane>*/}
                    {/*            <TabPane tabId="2"*/}
                    {/*                     style={{marginLeft:"50px",marginTop:"20px"}}>*/}
                    {/*                <FormControl component="fieldset"*/}
                    {/*                >*/}
                    {/*                    <FormLabel component="legend">Điểm Đến</FormLabel>*/}
                    {/*                    <RadioGroup aria-label="gender"*/}
                    {/*                                onChange={changeEnd}*/}
                    {/*                    >*/}
                    {/*                        {*/}
                    {/*                            listAddressEnd.map((item,index)=>{*/}
                    {/*                                return(*/}
                    {/*                                    <FormControlLabel*/}
                    {/*                                        key={index}*/}
                    {/*                                        value={item}*/}
                    {/*                                        control={<Radio/>}*/}
                    {/*                                        label={item}/>*/}
                    {/*                                );*/}
                    {/*                            })*/}
                    {/*                        }*/}

                    {/*                    </RadioGroup>*/}
                    {/*                </FormControl>*/}
                    {/*            </TabPane>*/}
                    {/*            <Paper style={{paddingTop:"10px",marginTop:"15px"}}>*/}
                    {/*                <Box style={{paddingTop:"10px"}}>*/}
                    {/*                    <Typography style={{marginLeft:"20px"}}>*/}
                    {/*                        Điểm Đi:*/}
                    {/*                        {*/}
                    {/*                            valueStart*/}
                    {/*                        }*/}
                    {/*                    </Typography>*/}
                    {/*                    <Typography style={{marginLeft:"20px"}}>*/}
                    {/*                        Điểm Đến:*/}
                    {/*                        {*/}
                    {/*                            valueEnd*/}
                    {/*                        }*/}
                    {/*                    </Typography>*/}
                    {/*                </Box>*/}

                    {/*            </Paper>*/}
                    {/*        </TabContent>*/}
                    {/*    </Box>*/}
                    {/*</Paper>*/}
                    {/*<Paper style={{marginTop:"5px"}}>*/}
                    {/*    <Typography style={{paddingTop:"20px",paddingLeft:"15px"}}>*/}
                    {/*        THÔNG TIN KHÁCH HÀNG*/}
                    {/*    </Typography>*/}
                    {/*    <Paper>*/}
                    {/*        <Box style={{paddingLeft:"20px",paddingTop:"20px"}}>*/}
                    {/*            <Form onSubmit={handleSubmit}>*/}
                    {/*                <FormGroup style={useStyleBootstrap}>*/}
                    {/*                    <Label for="exampleEmail"><strong>Họ tên</strong></Label>*/}
                    {/*                    <Input type="text"*/}
                    {/*                           name="name"*/}
                    {/*                           placeholder="Họ tên"*/}
                    {/*                            style={inputStyle}*/}
                    {/*                            onChange={validateName}/>*/}
                    {/*                </FormGroup>*/}
                    {/*                <FormGroup style={useStyleBootstrap}>*/}
                    {/*                    <Label for="examplePassword"><strong>Số điện thoại người đi</strong></Label>*/}
                    {/*                    <Input type="text"*/}
                    {/*                           name="phone"*/}
                    {/*                           placeholder="Số điện thoại của người đi :0912345678"*/}
                    {/*                           style={inputStyle}/>*/}
                    {/*                </FormGroup>*/}
                    {/*                <FormGroup style={useStyleBootstrap}>*/}
                    {/*                    <Label for="examplePassword"><strong>Email</strong></Label>*/}
                    {/*                    <Input type="email"*/}
                    {/*                           name="phone"*/}
                    {/*                           placeholder="Số điện thoại của người đi :0912345678"*/}
                    {/*                           style={inputStyle}/>*/}
                    {/*                </FormGroup>*/}
                    {/*                <FormGroup style={useStyleBootstrap}>*/}
                    {/*                    <Label for="examplePassword"><strong>Ghi chú</strong></Label>*/}
                    {/*                    <Input type="textarea"*/}
                    {/*                           name="phone"*/}
                    {/*                           placeholder="Các yêu cầu đặc biệt không thể được đảm bảo -*/}
                    {/*                            nhưng nhà xe sẽ cố gắng hết sức để đáp ứng nhu cầu của bạn."*/}
                    {/*                           style={inputStyle}/>*/}
                    {/*                </FormGroup>*/}
                    {/*                <Button color="warning"*/}
                    {/*                        style={btnNext}*/}
                    {/*                        >Tiếp tục</Button>*/}
                    {/*            </Form>*/}
                    {/*        </Box>*/}

                    {/*    </Paper>*/}
                    {/*</Paper>*/}
                </Col>
            </>
        );
    }
StageSeat.propTypes = {
    arrSeatIndex:PropTypes.object.isRequired
};
const mapStateToProps=(state)=>({
    seats:state.seat
});
export default connect(mapStateToProps, {putNull})(StageSeat);
