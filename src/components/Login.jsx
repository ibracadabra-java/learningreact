import React from 'react'
import {LoginForm} from "./LoginForm"
import './styles/Register.css'
import {Link} from 'react-router-dom'
import {Loading} from './Loading'

class Login extends React.Component {
    state = {
        form:{},
        loading:false,
        user:{           
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
            let res = await fetch('https://localhost:44384/api/account/login',config)
            let json = await res.json()
            this.setState ({
                user:json,
                fullname:json.result.fullName
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
render(){
    if(this.state.loading)
    return <Loading/>
    return (
        <div>
             <div className="container">


<div className="row justify-content-center">

    <div className="col-xl-10 col-lg-12 col-md-9">

        <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">                
                <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div className="col-lg-6">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                            </div>
                            <LoginForm onChange={this.handleChange}
                            form = {this.state.form}
                            onSubmit = {this.handleSubmit}/>
                            <hr/>
                            <div className="text-center">
                                <Link className="small" to="forgotpassword">Forgot Password?</Link>
                            </div>
                            <div className="text-center">
                                <Link className="small" to="register">Create an Account!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>

</div>
        </div>
    )
}
}
export default Login