import React from 'react'
import {LoginContainer} from './LoginContainer'
import './styles/vendor/fontawesome-free/css/all.min.css'
import './styles/Register.css'
import {BrowserRouter, Route} from 'react-router-dom'
import {RegisterContainer} from './RegisterContainer'
import {ForgotPassword} from './ForgotPassword'
import {Home} from './Home'

export function App() {
    return (        
        <BrowserRouter>
        <Route exact path="/" component= {LoginContainer}/>
        <Route exact path="/login" component= {LoginContainer}/>
        <Route exact path="/register" component= {RegisterContainer}/>     
        <Route exact path="/home" component= {Home}/> 
        <Route ex path="/forgotPassword" component= {ForgotPassword}/>     
        </BrowserRouter>
    )
}
