import React from 'react'
import Login from './Login'
import './styles/vendor/fontawesome-free/css/all.min.css'
import './styles/Register.css'
import {BrowserRouter, Route} from 'react-router-dom'
import {Register} from './Register'
import {ForgotPassword} from './ForgotPassword'
import {Home} from './Home'

export function App() {
    return (        
        <BrowserRouter>
        <Route exact path="/" component= {Login}/>
        <Route exact path="/login" component= {Login}/>
        <Route exact path="/register" component= {Register}/>     
        <Route exact path="/home" component= {Home}/> 
        <Route ex path="/forgotPassword" component= {ForgotPassword}/>     
        </BrowserRouter>
    )
}
