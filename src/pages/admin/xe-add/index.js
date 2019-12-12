import React, { Component,useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../../../components/sidebar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import DateFnsUtils from '@date-io/date-fns';
import {connect} from "react-redux";
import {useHistory} from 'react-router-dom';
import * as types from '../../../redux/type';
import { toast ,ToastContainer} from 'react-toastify';
import FormGroup from '@material-ui/core/FormGroup';
import * as _ from 'lodash';
import {addXe} from '../../../redux/action/car';
import * as ListProvider from '../../../contants';
import { set } from 'date-fns/esm';

const useStyles = makeStyles(theme => ({
    sidebar:{
        width:"15%",
        height:"100%"
    },
    root: {     
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(4),
      },
      title: {
        flexGrow: 1,
      },
      header:{

            },
     container:{
        marginTop: theme.spacing(2),
    },
    table: {
        maxWidth: 1000,
      },
      btnAdd:{
          marginTop: theme.spacing(2),
          marginBottom:theme.spacing(2),
          width:"300px"
      },
      input:{
          width:"500px"
      },formControl:{
          marginRight:"10px"
      },button:{
          width:"200px",marginTop:"30px"
      },rowinput:{
          marginTop:"20px"
      }
  }));

const loaiXe=[
    "Limousine Solati 9 chỗ",
    "Xe thường 16 chỗ"
];
const AddXe = (props)=> {

    let history=useHistory();
    const [users,setUsers]=useState([]);
    const [roles,setRoles]=useState(["ROLE_USER"]);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [repassword,setRepassword]=useState("");
    const [date,setDate] =useState('26-8-2019');
    const [selectedDate, setSelectedDate] =useState(new Date());

    const [arrLoaiXe,setArrLoaiXe]=useState([
        "Limousine Solati 9 chỗ",
        "Xe thường 16 chỗ"
    ]);
    const [arrNhaXe,setArrNhaXe]=useState([
        "Hải Duyên",
        "Minh Trí"
    ]);
    const [arrChuyenDi,setArrhuyenDi]=useState([
        "Sài Gòn - Đà Lạt",
        "Sài Gòn - Cái Bè"
    ]);
    const [arrTinhDiQua,setArrTinhDiQua] = useState(ListProvider.LIST_PROVINCE);
    const [timeBegin,setTimeBegin] = useState([
        "6:00","6:15","6:30","6:45","7:00","7:15","7:30",
        "7:45","8:00","8:15","8:30","8:45","9:00","9:15",
        "9:30","9:45","10:00"
    ]);
    const [arrDiemDi,setArrDiemDi] =useState([
        "Trạm Sài Gòn","Bến xe Miền Đông","VP Sài Gòn","Bảo Lộc","VP Đà Lạt","Công viên 23/9","Ngã ba Dầu Giây","Định Quán", "Phú Lâm","Di Linh","Đức Trọng",
        "Đức Trọng","Văn phòng Đà Lạt","Bến xe Miền Đông","VP Cai Lậy","VP Cái Bè","Bến xe phía nam Nha Trang","Bưu điện Cam Lâm",
        "Vp Phan Rang","Phan Rí, Quốc Lộ 1A","Cổng chào Phan Thiết","Ngã Tư An Sương","Trạm Thu Phí Tân An",
        "Cổng chào Phan Thiết",

    ]);
    const [arrDiaChi,setArrDiaChi]=useState([
        "97B Nguyễn Duy Dương - Quận 5 - Hồ Chí Minh",
        "12/12 đường ông Hiệu, KP1 - Tx.Cai Lậy - Tiền Giang","436 Nguyễn Thái Học, Khu 2 - Cái Bè - Tiền Giang","Ngã ba Dầu Giây - Thống Nhất - Đồng Nai",
        "QL 20, Phú Lâm - Tân Phú - Đồng Nai","Định Quán - Đồng Nai","BX Đa Thiện (gần Đồi Mộng Mơ), 01 đường Mai Anh Đào - Đà Lạt - Lâm Đồng",
        "Vòng xoay Cống Quỳnh - Công viên 23/9 - Quận 1 - Hồ Chí Minh","97B Nguyễn Duy Dương - Quận 5 - Hồ Chí Minh","Vĩnh Trung (đường 23/10) - Nha Trang - Khánh Hòa",
        "245 Nguyễn Trọng Kỳ, Cam Lợi - Cam Ranh - Khánh Hòa","230 Lê Duẫn - Phan Rang-Tháp Chàm - Ninh Thuận","Cổng chào Phan Rí, Quốc Lộ 1A - Phan Rí - Bình Thuận",
        "Gần vòng xoay Suối Cát (QL 1A - Trần Hưng Đạo) - Phan Thiết - Bình Thuận","Ngã Tư An Sương - Quận 12 - Hồ Chí Minh","P. Lợi Bình Nhơn - Tân An - Long An"
    ]);
    const [arrGiaGhe,setArrGiaGhe] =useState([
        100,150,200,250,300
    ]);
    const [arrSoCho,setArrSoCho]=useState([
        9,16,24,32
    ]);
    /*State insert */
    const [loaixe,setLoaiXe]=useState("");
    const [nhaxe,setNhaXe]=useState("");
    const [chuyendi,setChuyenDi]=useState("");
    const [tinhselected,setTinhSelected]=useState(0);
    const [tinhdiqua,setTinhDiQua]=useState([]);
    const [time,setTime]=useState("");
    const [diemdi,setDiemDi]=useState("");
    const [diachi,setDiaChi]=useState("");
    const [lichtrinh,setLichTrinh]=useState([]);
    const [gia,setGia]=useState(0);
    const [socho,setSoCho]=useState(9);
    const [arrGhe,setArrGhe]=useState([]);

    useEffect(() => {
        const isAdmin=JSON.parse(localStorage.getItem("admin"));
        if(!isAdmin){
            history.push("/");
        }
    },[]);

    useEffect(() => {

        document.getElementById("footer").style.display="none";
       
        if(props.car.action === types.CREATE_CAR_SUCCESS){
            toast.success("Thêm thành công");
        
        }
        if(props.car.action === types.CREATE_CAR_FAIL){
            toast.error("Thêm không thành công");
        }

    });
    
    
   const onChangeLoaiXe= event => {
        setLoaiXe(event.target.value);
       console.log(event.target.value);
   };
   const onChangeNhaXe = event => {
       setNhaXe(event.target.value);
        console.log(event.target.value);
   };
   const onChangeChuyenDi= event => {
       setChuyenDi(event.target.value);
        console.log(event.target.value);
   };
   const onChangeTinh = event => {
        setTinhSelected(event.target.value);
        console.log(event.target.value);

   };
   const onAddTinh = event => {
       if(tinhselected === 0){
           toast.error("Vui lòng chọn tỉnh đi qua");
       }else{
        setTinhDiQua(tinhdiqua.concat(parseInt(tinhselected)));
        console.log(tinhdiqua);
        setTinhSelected(0);
       }
        
   }
    /**Random string  */
    const  randomString=(length, chars)=>{
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }
    const onAddXe = event =>{
        if(!loaixe){
            toast.error("Vui lòng chọn loại xe");
        }else if (!nhaxe){
            toast.error("Vui lòng chọn nhà xe");
        }else if(!chuyendi){
            toast.error("Vui lòng chọn chuyến đi");
        }else if(tinhdiqua.length <= 0){
            toast.error("Vui lòng chọn tỉnh đi qua");
        }else if(!lichtrinh){
            toast.error("Vui lòng thêm lịch trình cho tuyến xe");
        }else{
            for (let index = 1; index <= socho ; index++) {
                const element = {
                    "maGhe" : index,
                    "stt" : index,
                    "gia" : gia,
                    "dat" : false
                };
                arrGhe.push(element);
            }
            const xe={
                "_id":randomString(6,'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
                "loaixe":loaixe,
                "nhaxe" : nhaxe,
                "loaidi" : "1 chiều",
                "chuyendi" : chuyendi,
                "danhgia" : 5,
                "hinhanh" : "",
                "tinhdiqua" :tinhdiqua,
                "giodi" : lichtrinh[0].thoigiandi,
                "ghecontrong" : 16,
                "ngaydi" : date,
                "chinhsachhuyve" : "",
                "lichtrinh" :lichtrinh,
                "danhsachghe" :arrGhe
            };
            props.createXe(xe,JSON.parse(localStorage.getItem("token")));
            setLoaiXe("");
            setNhaXe("");
            setChuyenDi("");
            setTinhDiQua([]);
            setLichTrinh([]);
            
        }

        const token = JSON.parse(localStorage.getItem("token"));
        
    }
    const onAddLichTrinh= ()=>{
        if(!time){
            toast.error("Vui lòng chọn giờ đi");
        }else if(!diemdi){
            toast.error("Vui lòng chọn điểm đi");
        }else if(!diachi){
            toast.error("Vui lòng chọn địa chỉ");
        }else if(!tinhselected){
            toast.error("Vui lòng chọn tỉnh");
        }else{
            const lichtrinhSub={
                thoigiandi:time,
                diemdi:diemdi,
                diachi:diachi,
                tinh:tinhselected
            };
           
            setLichTrinh(lichtrinh.concat(lichtrinhSub));
            setTime("");
            setDiemDi("");
            setDiaChi("");
            setTinhSelected("");
        }
        
    }
     /* Change date */
     const changeDate = date => {
        let month=parseInt(date.getMonth());
        const dateLook=parseInt(month+1)+"-"+date.getDate()+"-"+date.getFullYear();
        const dateFake=date.getDate()+"-"+parseInt(month+1)+"-"+date.getFullYear();
        setSelectedDate(dateLook);
        setDate(dateFake);
      };
    const onChangeTime = event => {
        setTime(event.target.value);
        console.log(event.target.value);
    };
    const onChangeDiemDi = event => {
        setDiemDi(event.target.value);
        console.log(event.target.value);
    };
    const onChangeDiaChi = event => {
        setDiaChi(event.target.value);
    };
    const onChangeGiaGhe = event => {
        setGia(event.target.value);
    };
    const onChangeSoCho = event => {
        setSoCho(event.target.value);
    };

    const classes = useStyles();

        return (
            <div>
                 <Grid container  spacing={2} 
                        className={classes.container}>
                    <Grid item xs={2}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={10}>
                        <Typography>Thêm Xe</Typography>
                        <Container component="main"
                                  maxWidth="md">
                        <CssBaseline />
                        <div className={classes.paper}>
                       
                       
                        <div className={classes.form} >
                            <FormGroup row className={classes.rowinput}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="age-native-simple">Loại Xe</InputLabel>
                                        <Select
                                        native                             
                                        onChange={onChangeLoaiXe}                               
                                        >
                                        {
                                            arrLoaiXe.map((item,index)=>{
                                                return (<option value={item}
                                                                key={index}>{item}</option>)
                                            })
                                        }                                                  
                                        </Select>
                                    </FormControl>
                                </FormGroup>
                                <FormGroup row className={classes.rowinput}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="age-native-simple">Số Chỗ</InputLabel>
                                        <Select
                                        native                             
                                        onChange={onChangeSoCho}                               
                                        >
                                        {
                                            arrSoCho.map((item,index)=>{
                                                return (<option value={item}
                                                                key={index}>{item}</option>)
                                            })
                                        }                                                  
                                        </Select>
                                    </FormControl>
                                </FormGroup>
                                <FormGroup row className={classes.rowinput}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="age-native-simple">Giá Ghế</InputLabel>
                                        <Select
                                        native                             
                                        onChange={onChangeGiaGhe}                               
                                        >
                                        {
                                            arrGiaGhe.map((item,index)=>{
                                                return (<option value={item}
                                                                key={index}>{item}</option>)
                                            })
                                        }                                                  
                                        </Select>
                                    </FormControl>
                                </FormGroup>
                            <FormGroup row className={classes.rowinput}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="age-native-simple">Nhà Xe</InputLabel>
                                        <Select
                                        native
                                        onChange={onChangeNhaXe}
                                        >
                                        {
                                            arrNhaXe.map((item,index)=>{
                                                return (<option value={item}
                                                                key={index}>{item}</option>)
                                            })
                                        }                                                 
                                        </Select>
                                    </FormControl>
                                </FormGroup>
                            <FormGroup row className={classes.rowinput}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="age-native-simple">Chuyến đi</InputLabel>
                                        <Select
                                        native
                                        onChange={onChangeChuyenDi}
                                        >
                                        {
                                            arrChuyenDi.map((item,index)=>{
                                                return (<option value={item}
                                                                key={index}>{item}</option>)
                                            })
                                        }                                                 
                                        </Select>
                                    </FormControl>
                                </FormGroup>
                            <FormGroup row className={classes.rowinput}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="age-native-simple">Tỉnh Đi Qua</InputLabel>
                                        <Select
                                        native
                                        onChange={onChangeTinh}
                                        >
                                        {
                                            arrTinhDiQua.map((item,index)=>{
                                                return (<option value={item.MA}
                                                                key={index}>{item.NAME}</option>)
                                            })
                                        }       
                                                                            
                                        </Select>
                                    </FormControl>
                                    <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            className={classes.btnAdd}
                                            onClick={onAddTinh}
                                            className={classes.button}
                                        >
                                            Thêm Tỉnh Đi Qua
                                        </Button>     
                                </FormGroup>
                                
                            
                                <FormGroup row className={classes.rowinput}>
                                    <FormControl className={classes.formControl}>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <KeyboardDatePicker
                                            className={classes.datepicker}                                   
                                            variant="inline"
                                            format="dd/MM/yyyy"
                                            borderBottom="none"
                                            id="date-picker-inline"
                                            label="Ngày đi"
                                            value={selectedDate}
                                            onChange={changeDate}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                            />
                                        </MuiPickersUtilsProvider>
                                    </FormControl>
                                </FormGroup>
                                
                                   <Typography style={{marginTop:"50px"}}>Thêm Lịch Trình</Typography>
                                    <FormGroup column style={{marginTop:"40px"}} className={classes.rowinput}>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel htmlFor="age-native-simple">Thời Gian Đi</InputLabel>
                                            <Select
                                            native
                                            onChange={onChangeTime}
                                            >
                                            {
                                                timeBegin.map((item,index)=>{
                                                    return (<option value={item}
                                                                    key={index}>{item}</option>)
                                                })
                                            }                                                 
                                            </Select>
                                            <FormControl className={classes.formControl}>
                                            <InputLabel htmlFor="age-native-simple">Điểm Đi </InputLabel>
                                            <Select
                                                native
                                                onChange={onChangeDiemDi}
                                                >
                                            {
                                                arrDiemDi.map((item,index)=>{
                                                    return (<option value={item}
                                                                    key={index}>{item}</option>)
                                                })
                                            }                                                 
                                            </Select>
                                        </FormControl>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel htmlFor="age-native-simple">Điạ Chỉ</InputLabel>
                                            <Select
                                            native
                                            onChange={onChangeDiaChi}
                                            >
                                            {
                                                arrDiaChi.map((item,index)=>{
                                                    return (<option value={item}
                                                                    key={index}>{item}</option>)
                                                })
                                            }                                                 
                                            </Select>
                                        </FormControl>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel htmlFor="age-native-simple">Tỉnh</InputLabel>
                                            <Select
                                            native
                                            onChange={onChangeTinh}
                                            >
                                            {
                                                arrTinhDiQua.map((item,index)=>{
                                                    return (<option value={item.MA}
                                                                    key={index}>{item.NAME}</option>)
                                                })
                                            }                                                 
                                            </Select>
                                        </FormControl>
                                    </FormControl>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.btnAdd}
                                        onClick={onAddLichTrinh}
                                        className={classes.button}
                                    >
                                Thêm Lịch Trình
                            </Button>
                                    </FormGroup>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.btnAdd}
                                onClick={onAddXe}
                            >
                                Thêm Xe
                            </Button>
                           
                        </div>
                        </div>
                        <ToastContainer position="top-right"
                                        autoClose={1000}
                                        hideProgressBar={true}
                                        newestOnTop={false}
                                        rtl={false}
                                        pauseOnVisibilityChange
                                        draggable
                                        pauseOnHover></ToastContainer>
                    </Container>
                    </Grid>
                </Grid>
                <ToastContainer position="top-right"
                    autoClose={1000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover></ToastContainer>
            </div>
        );
    
}

const mapStateToProps =(state)=>({
    car:state.filterCarReducer
  });
  const mapDispatchToProps = dispatch => {
    return {
        createXe:(xe,token)=> dispatch(addXe(xe,token))
    };
  };

export default  connect(mapStateToProps,mapDispatchToProps)(AddXe);