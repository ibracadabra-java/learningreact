import React, { Fragment,Component } from 'react'
import './styles/Register.css'
import {Link} from 'react-router-dom'
import {RegisterForm} from "./RegisterForm"

export  class Register extends Component {
    state = {
        form:{
            fullName:""
        },
        loading:false,
        user:{   
            result:{
                fullName:""
            }        
        },
        fullname:""
    }
    handleSubmit = async e =>{
        this.setState({
            loading:true
        })
        e.preventDefault()
        try {            
            let config = {
                method : 'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-type':'application/json'
                },
                body:JSON.stringify(this.state.form)
            }
            let res = await fetch('https://localhost:44384/api/account/register',config)
            let json = await res.json()
            if(json)
            this.setState ({
                fullname:this.state.form.fullName
            })            
            this.setState({
                loading:false
            })
            this.props.history.push('/home',this.state)
        } catch (error) {
            this.setState({
                loading:false
            })
        }
        console.log(this.state)
    }
    handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
            [e.target.name]:e.target.value
        }
        })
    }
    render() {
        
        return (
            <Fragment>      
        <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">  
        <div className="card-body p-0">
        <div className="row">
        <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
        <div className="col-lg-7">
        <div className="p-5">
        <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                               <RegisterForm onSubmit={this.handleSubmit} onChange={this.handleChange}
                               form = {this.state.form}/>
                            <hr/>
                            <div className="text-center">
                                <Link className="small" to="forgotpassword">Forgot Password?</Link>
                            </div>
                            <div className="text-center">
                                <Link className="small" to="login">Already have an account? Login!</Link>
                            </div>
        </div>
        </div>
        </div>
            </div>                 
        </div>
        </div>    
        </Fragment>  
        )
    }
}
