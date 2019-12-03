import React, { Component,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import '../search-header/style.scss';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RoomIcon from '@material-ui/icons/Room';
import * as LIST from '../../contants';
import * as _ from "lodash";
import { toast ,ToastContainer} from 'react-toastify';

/**Style of component */
const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: "#20274D !important",  
      width: '100%',
      height: '90px'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    container:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      alignContent:"center",
      justifyContent: 'space-around',
      width:"85%",
      height:"100%",
      margin:"auto",
      boxShadow:"none",
      backgroundColor:"#20274D" 
    },
    input:{
      backgroundColor:"#fff",
      borderRadius:"5px",
      width:"350px"
    },
    gridItem:{
      marginRight:"10px"
    },
    datepicker:{
      backgroundColor:"#fff",
      height:"56px",
      borderRadius:"5px",
      width:"250px",
      borderBottom:"none",
      padding:"5px"
    },
    button:{
      padding:"13px",
      width:"200px",
      backgroundColor:"#5392F9",
      fontWeight:700,
      fontSize:"18px"
    },
    searchContent:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:"center",
      alignContent:"center",
      width:"75%",
    },
    searchContentItemBegin:{
      width:"350px",
      zIndex:"2000",
      marginTop:"-14px",
     display:"none",
     marginLeft:"10px"
    },
    searchContentItemEnd:{
      width:"350px",
      zIndex:"2000",
      marginTop:"-14px",
      display:"none",
      marginLeft:"370px"
    },
    listProvince:{
      overflow:"scroll",
      height:"500px",
      borderRadius:"5px"
    }
   
  }));

const SearchHeader = (props) =>{

    const classes = useStyles();
    
    /* State */
    const [provinces,setProvinces] =useState(LIST.LIST_PROVINCE);
    const [locate,setLocate] =useState("");

    const [selectedDate, setSelectedDate] =useState(new Date());
    const [nameBeginLocate,setNameBeginLocate] =useState("");
    const [nameEndLocate,setNameEndLocate] =useState("");

    const [idBeginLocate,setIdBeginLocate] =useState(0);
    const [idEndLocate,setIdEndLocate] =useState(0);

    const [date,setDate] =useState('26-8-2019');
    const [endLocate,setEndLocate] =useState("");

    /* Change date */
    const changeDate = date => {
      let month=parseInt(date.getMonth());
      const dateLook=parseInt(month+1)+"-"+date.getDate()+"-"+date.getFullYear();
      const dateFake=date.getDate()+"-"+parseInt(month+1)+"-"+date.getFullYear();
      setSelectedDate(dateLook);
      setDate(dateFake);
    };
    
    const selectProvince = (sign,event) =>{
      switch (sign) {
        case 1:
          setNameBeginLocate(event.target.dataset.name);
          setIdBeginLocate(event.target.dataset.id);
          break;
        case 2:
          setNameEndLocate(event.target.dataset.name);
          setIdEndLocate(event.target.dataset.id);
          

          break;
        default:
          break;
      }
    };

    /* */
    const handleClickSearch=(sign,event)=>{
      switch (sign) {
        case 1:
          setProvinces(toSearchProvince(locate));

          document.getElementById("list-search-begin").style.display="block";
          break;
        case 2:
            setProvinces(toSearchProvince(locate));
            document.getElementById("list-search-end").style.display="block";
            break;
        default:
          break;
      }
     
    };
    /*Method change search begin */
    const handleChangeSearch= (sign, event)  =>{
        
        switch (sign) {
          case 1:
            /* */
            setLocate(event.target.value);
            setProvinces(toSearchProvince(locate));
            setNameBeginLocate(event.target.value);
            document.getElementById("list-search-begin").style.display="block";
            break;
          case 2:
              /* */
              setLocate(event.target.value);
              setProvinces(toSearchProvince(locate));
              setNameEndLocate(event.target.value);
              document.getElementById("list-search-end").style.display="block";
              break;
           default:
            break;
        }
       
    };
     /*
    * method tìm kiếm thông qua key
    * */
   const toSearchProvince=(location)=>{
      return _.filter(LIST.LIST_PROVINCE,(o)=>{
        return _.includes(o.NAME.toLowerCase(),location.toLowerCase());
    });
}
    /*Method blur search begin */
    const handleBlurSearchBegin= (sign, event) =>{
        switch (sign) {
          case 1:
            document.getElementById("list-search-begin").style.display="none";
            break;
          case 2:          
              document.getElementById("list-search-end").style.display="none";  
              break;
          default:
            break;
        }
    };

    /**Method Re search */
    const handleReSearch =()=>{
      if(idBeginLocate !== 0 && idEndLocate !==0){
        props.history.push(`/list-xe/${idBeginLocate}/${idEndLocate}/${date}`);

      }else{
        toast.warn("Phải chọn điểm đi và điểm đến !", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    }
    return (
        <div className={classes.root}>
        
            <AppBar position="static" 
                   className={classes.container} >
            <Toolbar>
               <Container component="main" maxWidth={"lg"} >
                  <Grid container 
                        >
                        <Grid item 
                              className={classes.gridItem}
                              >
                            <TextField
                                      className={classes.input}
                                      name="begin-province"
                                      variant="outlined"
                                      type="text"
                                      color="white"
                                      placeholder="Đi từ"
                                      onChange={(e)=>handleChangeSearch(1,e)}
                                      onBlur={(e)=>handleBlurSearchBegin(1,e)}
                                      onClick={(e)=>handleClickSearch(1,e)}
                                      value={nameBeginLocate}
                                />
                            
                        </Grid>
                        <Grid item 
                              className={classes.gridItem}>
                            <TextField
                                      className={classes.input}
                                      variant="outlined"
                                      name="repassword"
                                      type="text"
                                      id="password"
                                      color="white"
                                      placeholder="Đi đến"
                                      value={nameEndLocate}
                                      onChange={(e)=>handleChangeSearch(2,e)}
                                      onBlur={(e)=>handleBlurSearchBegin(2,e)}
                                      onClick={(e)=>handleClickSearch(2,e)}
                                />
                            
                        </Grid>
                        <Grid item 
                              className={classes.gridItem}>
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
                            
                        </Grid>
                        <Grid item 
                              className={classes.gridItem}>
                             <Button
                                className={classes.button}
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={handleReSearch}
                              >
                                TÌM KIẾM
                              </Button>
                        </Grid>
                  </Grid>
               </Container>
               
            </Toolbar>
            
            </AppBar>
            <Container component="main">
                <Grid container>
                      <Grid item
                            className={classes.searchContentItemBegin}
                            id="list-search-begin">
                          <Paper >
                               <List component="nav"
                                     className={classes.listProvince}
                                     >
                                    {
                                      provinces.map(province =>{
                                        return (
                                          <ListItem button
                                                    data-id={province.MA}
                                                    data-name={province.NAME}
                                                    onMouseDown={(e)=>selectProvince(1,e)}                 
                                          >
                                            <ListItemIcon>
                                              <RoomIcon />
                                            </ListItemIcon>
                                            {/* <ListItemText primary={province.NAME} 
                                                          data-id={province.MA}
                                                          onMouseDown={selectProvince}
                                                          /> */}
                                              <span data-id={province.MA}
                                                    data-name={province.NAME}
                                                    onMouseDown={(e)=>selectProvince(1,e)} 
                                              >
                                                    {province.NAME}
                                              </span>
                                          </ListItem>
                                        )  
                                      })

                                    }
                                  
                                </List>
                          </Paper>
                      </Grid>
                      <Grid item
                            className={classes.searchContentItemEnd}
                            id="list-search-end">
                          <Paper >
                               <List component="nav"
                                     className={classes.listProvince}
                                     >
                                    {
                                      provinces.map(province =>{
                                        return (
                                          <ListItem button
                                                    data-id={province.MA}
                                                    data-name={province.NAME}
                                                    onMouseDown={(e)=>selectProvince(2,e)}                 
                                          >
                                            <ListItemIcon>
                                              <RoomIcon />
                                            </ListItemIcon>
                                              <span data-id={province.MA}
                                                    data-name={province.NAME}
                                                    onMouseDown={(e)=>selectProvince(2,e)} 
                                              >
                                                    {province.NAME}
                                              </span>
                                          </ListItem>
                                        )  
                                      })
                                    }
                                </List>
                          </Paper>
                      </Grid>
                </Grid>                 
            </Container>
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

export default SearchHeader;