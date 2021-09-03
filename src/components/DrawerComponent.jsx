import React from 'react'
import { makeStyles,Drawer, Divider } from '@material-ui/core'
import { Listas } from './Listas'


const style = makeStyles(theme=>({
    
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: 240,
            flexShrink: 0,
          }
      },
      drawerPaper: {
        width: 240,
      },
      toolbar: theme.mixins.toolbar,
}))
export function DrawerComponent({variant,open,onClose}) {
    const classes = style()
    return (
        <Drawer
         className={classes.drawer}        
        classes={{
            paper: classes.drawerPaper,
        }}
        anchor="left"
        variant={variant}
        open={open}
        onClose={onClose ? onClose : null}>  
        <div className={classes.toolbar}></div>
        <Divider/> 
        <Listas/>        
        </Drawer>
    )
}
