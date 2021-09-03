import React from 'react'
import {LoginContainer} from './LoginContainer'
import './styles/vendor/fontawesome-free/css/all.min.css'
import {BrowserRouter, HashRouter, Route} from 'react-router-dom'
import {RegisterContainer} from './RegisterContainer'
import {ForgotPassword} from './ForgotPassword'
import {Home} from './Home'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../temaConfig'
import { Navbar } from './Navbar'
import { Fragment } from 'react'
import ContainerComponent from './ContainerComponent'
import { Task } from './Task'
import {Router} from '../routes'

export function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
            <Router/> 
            </BrowserRouter>
                         
        </ThemeProvider>
    )
}
