import React, { Component,useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../../../components/sidebar';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {connect} from "react-redux";
import {getUsers} from '../../../redux/action/user';
import {useHistory} from 'react-router-dom';
import * as types from '../../../redux/type';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
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
          marginBottom:theme.spacing(2)
      }
  }));
const User = (props)=> {

    let history=useHistory();
    const [users,setUsers]=useState([]);




    useEffect(() => {

        const isAdmin=JSON.parse(localStorage.getItem("admin"));
        // if(!isAdmin){
        //     history.push("/");
        // }
        document.getElementById("footer").style.display="none";
        const token=JSON.parse(localStorage.getItem("token"));
        props.getListUsers(token);
        if(props.user.action === types.GET_LIST_USER_SUCCESS){
            setUsers(props.user.users);
        }

    },[props.user.action])
    
    
    const onEdit = event =>{
        console.log(2);
    }

    const onAdd = ()=>{
        history.push("/admin/user/add");
    }
    const classes = useStyles();

        return (
            <div>
                 <Grid container  spacing={2} 
                        className={classes.container}>
                    <Grid item xs={2}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={10}>
                        <Typography>Quản lý người dùng</Typography>
                        <Button variant="contained" 
                                color="primary"
                                className={classes.btnAdd}
                                onClick={onAdd}>
                            Thêm người dùng
                        </Button>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                {/* <TableCell></TableCell> */}
                                <TableCell>Tên Đăng Nhập</TableCell>
                               
                                <TableCell >Quyền</TableCell>
                                <TableCell >Xóa</TableCell>
                                <TableCell ></TableCell>
                                <TableCell ></TableCell>
                               
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {users.map((item,index) => (
                                <TableRow key={index}>
                                    {/* <TableCell>
                                    <Checkbox         
                                        onChange={onCheckUser(item._id)}
                                        value={item._id}
                                        inputProps={{
                                        'aria-label': 'primary checkbox',
                                    }} />
                                    </TableCell> */}
                                    <TableCell >
                                        {item.username}
                                    </TableCell>
                                 
                                    <TableCell >{item.roles+" "}</TableCell>
                                    <TableCell >{item.deleted?"Đã Xóa":"Chưa Xóa"}</TableCell>
                                    <TableCell >
                                        <Button variant="contained" 
                                                color="primary"
                                                onClick={onEdit}
                                        >
                                            <EditIcon/>
                                        </Button>
                                    </TableCell>
                                    <TableCell >
                                        <Button variant="contained" color="secondary">
                                            <DeleteIcon/>
                                        </Button>
                                    </TableCell>
                                  
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
                
            </div>
        );
    
}

const mapStateToProps =(state)=>({
    user:state.user
  });
  const mapDispatchToProps = dispatch => {
    return {
        getListUsers: (token) => dispatch(getUsers(token))
    };
  };

export default  connect(mapStateToProps,mapDispatchToProps)(User);