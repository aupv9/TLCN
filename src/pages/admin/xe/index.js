import React, { Component, useState,useEffect } from 'react';
import { makeStyles,useTheme  } from '@material-ui/core/styles';
import { NavLink,useHistory,Route ,Switch} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Sidebar from '../../../components/sidebar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {connect} from "react-redux";
import {getCarAll} from '../../../redux/action/car';
import * as types from '../../../redux/type';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
   
    sidebar:{
        width:"15%",
        height:"100%"
    },

    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
      header:{

            }


  }));
  const useStyles1 = makeStyles(theme => ({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },table:{
      border:"1px solid #000"
    }
  }));
function TablePaginationActions(props) {

    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;
  
    const handleFirstPageButtonClick = event => {
      onChangePage(event, 0);
    };
  
    const handleBackButtonClick = event => {
      onChangePage(event, page - 1);
    };
  
    const handleNextButtonClick = event => {
      onChangePage(event, page + 1);
    };
  
    const handleLastPageButtonClick = event => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <div className={classes.root}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
const Xe = (props)=> {
    const classes = useStyles();

    const [cars,setCars]=useState([]);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, cars.length - page * rowsPerPage);
    let history=useHistory();
    useEffect(() => {
        if(props.car.action === types.GET_CAR_ALL_SUCCESS){
            setCars(props.car.cars);
        }
    })
    useEffect(() => {
       // const data = axios.get("http://localhost:8080/api/Cars").then(res => console.log(res.data));
       
        const token=JSON.parse(localStorage.getItem("token"));
         props.getAllCar(token);

    },[])
    const onAdd=()=>{
        history.push("/admin/xe/add");
    }
    
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
        return (
            <div>
                 <Grid container  spacing={2}>
                    <Grid item xs={2}>
                    <Sidebar />
                    </Grid>
                    <Grid item xs={10}>
                    <Typography>Quản lý người dùng</Typography>
                        <Button variant="contained" 
                                color="primary"
                                className={classes.btnAdd}
                                onClick={onAdd}>
                            Thêm Xe
                        </Button>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow hover={true}>
                                {/* <TableCell></TableCell> */}
                                <TableCell>Loại Xe</TableCell>
                                <TableCell >Nhà Xe</TableCell>
                                <TableCell >Chuyến Đi</TableCell>
                                
                                <TableCell >Giờ Đi</TableCell>
                                <TableCell >Ngày Đi</TableCell>
                                <TableCell >Lịch Trình</TableCell>
                                <TableCell >Số Lượng Ghế</TableCell>
                                <TableCell >Xóa</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                               {(rowsPerPage > 0 ? cars.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage ):cars
                               )
                                .map((car,index) =>{
                                    const lengthGhe=car.danhsachghe !== null ? car.danhsachghe.length:0; 
                                    return (
                                    <TableRow key={index}
                                    hover={true}>
                                    
                                    <TableCell >
                                        {car.loaixe}
                                    </TableCell>
                                 
                                    <TableCell >{car.nhaxe}</TableCell>
                                    <TableCell >{car.chuyendi}</TableCell>
                                   
                                    <TableCell >{car.giodi}</TableCell>
                                    <TableCell >{car.ngaydi}</TableCell>
                                    <TableCell >
                                      <Table className={classes.table} aria-label="simple table">
                                          <TableHead>
                                            <TableRow hover={true}>
                                              <TableCell>Thời gian đi</TableCell>
                                              <TableCell>Điểm đi</TableCell>
                                              <TableCell >Địa chỉ</TableCell>
                                              <TableCell >Tỉnh</TableCell>

                                            </TableRow>
                                          </TableHead>
                                          <TableBody>
                                          {
                                            (car.lichtrinh?car.lichtrinh:[]).map((item, index) =>{
                                              return (
                                                <TableRow key={index}>
                                                  <TableCell >
                                                    {item.thoigiandi}
                                                  </TableCell>
                                                  <TableCell >{item.diemdi}</TableCell>
                                                  <TableCell >{item.diachi}</TableCell>
                                                  <TableCell >{item.tinh}</TableCell>
                                              </TableRow>
                                              )
                                            })            
                                          }
                                              
                                          </TableBody>
                                        </Table>
                                      
                                    </TableCell>
                                    <TableCell >
                                          {lengthGhe}
                                    </TableCell>

                                    <TableCell >{car.deleted?"Đã Xóa":"Chưa Xóa"}</TableCell>



                                    <TableCell >
                                        <Button variant="contained" 
                                                color="primary"
                                        >
                                            <EditIcon/>
                                        </Button>
                                    </TableCell>
                                    <TableCell >
                                        <Button variant="contained" color="secondary">
                                            <DeleteIcon/>
                                        </Button>
                                    </TableCell>
                                  
                                </TableRow>)
                                })
                               }
                               {emptyRows > 0 && (
                                  <TableRow style={{ height: 53 * emptyRows }}>
                                   <TableCell colSpan={6} />
                                  </TableRow>
                            )}
                            </TableBody>
                            <TableFooter>
                             <TableRow>
                              <TablePagination
                                 rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={3}
                                count={cars.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                        inputProps: { 'aria-label': 'rows per page' },
                                       native: true,
                                  }}
                                  onChangePage={handleChangePage}
                               onChangeRowsPerPage={handleChangeRowsPerPage}
                               ActionsComponent={TablePaginationActions}
                               />
                           </TableRow>
                           </TableFooter>
                        </Table>
                    </Grid>
                </Grid>
                
            </div>
        );
    
}

const mapStateToProps =(state)=>({
    car:state.filterCarReducer
  });
  const mapDispatchToProps = dispatch => {
    return {
        getAllCar:(token)=> dispatch(getCarAll(token))
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(Xe);