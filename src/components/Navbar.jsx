import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import theme from '../temaConfig'
import {IconButton, makeStyles,Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const useStyle = makeStyles(theme=>({
 offset: theme.mixins.toolbar,
 menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    }
  }, 
  title: {
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${240}px)`,
      marginLeft: 240,
    }
  }
}))

export function Navbar({openAccion}) {
    const classes = useStyle()
    return (        
            <AppBar position="fixed" color="primary" className={classes.appBar}>
              <Toolbar>
                  <IconButton className={classes.menuButton} color="inherit" aria-label="menu" onClick={openAccion}>
                      <MenuIcon/>
                  </IconButton>
                <Typography variant="h6" className={classes.title}>
                  Hola
                </Typography>  
                <Button variant="text" color="inherit">
                    Login
                    </Button>              
              </Toolbar>
            </AppBar>
    
        
    )
}
