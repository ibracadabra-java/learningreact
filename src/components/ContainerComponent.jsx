import React, { useState } from 'react'
import { Navbar } from './Navbar'
import {
    Hidden,
    makeStyles
} from '@material-ui/core'
import {DrawerComponent} from './DrawerComponent'
import { BoxComponents } from './BoxComponents'
import { Task } from './Task'
import {Outlet, Route} from 'react-router-dom'


const style = makeStyles(theme =>({
    root:{
        display:'flex',
        backgroundColor:theme.palette.background.default
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        width:100
      }
}))
export default function ContainerComponent() {
    const classes = style()
    const [open,setOpen] = useState(false)
    const handleDrawerToggle = () => {
        setOpen(!open);
      };
    return (
        <div className={classes.root}>
            <Navbar openAccion={handleDrawerToggle}/>
            <Hidden xsDown>
            <DrawerComponent variant="permanent"
            open={open}
            onClose={handleDrawerToggle}
            />
            </Hidden>
            <Hidden smUp>
            <DrawerComponent variant="temporary"
            open={open}
            onClose={handleDrawerToggle}
            />
            </Hidden>
                        
            <div className={classes.content}>
                <div className={classes.toolbar}></div>                            
                        <Outlet/>                              
            </div>          
            
        </div>
    )
}
