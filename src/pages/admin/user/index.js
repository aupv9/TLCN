import React, { Component } from 'react';
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

import homeRoutes from '../../../routes';
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
const User = ()=> {
    const classes = useStyles();

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
                         1
                    </Grid>
                </Grid>
                
            </div>
        );
    
}

export default User;