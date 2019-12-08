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
import homeRoutes from '../../routes';



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

    // useEffect(() => {

    //     document.getElementById("footer").style.display='none';
    //     if(!JSON.parse(localStorage.getItem("admin"))){
    //         history.push('/');
    //     }

    // },[])

    return (
            <div>
                 <Grid container  spacing={2}>
                    <Grid item xs={2}>
                    <List component="nav" 
                    className={classes.sidebar}>
                    
                    <NavLink to="/admin">
                        <ListItem button>   
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                        <ListItemText primary="DashBoard" />
                        </ListItem>
                    </NavLink>
                    <NavLink to="/admin/user">
                        <ListItem button>   
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                        <ListItemText primary="Người dùng" />
                        </ListItem>
                    </NavLink>
                    <NavLink to="/admin/xe">
                        <ListItem button>   
                            <ListItemIcon>
                                <DirectionsCarIcon />
                            </ListItemIcon>
                        <ListItemText primary="Xe" />
                        </ListItem>
                    </NavLink>
                    <NavLink to="/admin/ve">
                        <ListItem button>   
                            <ListItemIcon>
                                <DescriptionIcon />
                            </ListItemIcon>
                        <ListItemText primary="Vé" />
                        </ListItem>
                    </NavLink>
                </List>
                    </Grid>
                    <Grid item xs={10}>
                    

                    </Grid>
                </Grid>
               
                
            </div>
        );
    
}

export default Admin;