import React, { Fragment } from 'react'
import {RegisterForm} from "./RegisterForm"
import {Link} from 'react-router-dom'

export default function Register({form,onSubmit,onChange}) {
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
                               <RegisterForm onSubmit={onSubmit} onChange={onChange}
                               form = {form}/>
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
