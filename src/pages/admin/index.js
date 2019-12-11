import React, { Component, useEffect } from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink,useHistory,Route ,Switch} from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import DescriptionIcon from '@material-ui/icons/Description';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import User from './user';
import routes from '../../routes';
import Sidebar from "../../components/sidebar";

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

const Admin =(props)=>  {

    const classes = useStyles();
    let history=useHistory();

     useEffect(() => {

         document.getElementById("footer").style.display='none';
         if(!JSON.parse(localStorage.getItem("admin"))){
            history.push('/');
        }

  },[])

    return (
        <div className={classes.wrapper}>
            <Grid container  spacing={2}>
                        <Grid item xs={2}>
                         <Sidebar />

                    
                        </Grid>
                        <Grid item xs={10}>
                            1
                        </Grid>
            </Grid>
                    
           
        </div>
        );
    
}

export default Admin;