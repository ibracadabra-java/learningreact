import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/vendor/fontawesome-free/css/all.min.css'
import {Login} from './Login'
import {BrowserRouter, Route} from 'react-router-dom'
import {Register} from './Register'
import {ForgotPassword} from './ForgotPassword'

export function App() {
    return (        
        <BrowserRouter>
        <Route exact path="/" component= {Login}/>
        <Route exact path="/login" component= {Login}/>
        <Route exact path="/register" component= {Register}/>     
        <Route ex path="/forgotPassword" component= {ForgotPassword}/>     
        </BrowserRouter>
    )
}
