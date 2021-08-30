import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class LoginForm extends Component {
   
    render() {
        const {onChange,form,onSubmit} = this.props
        return (
            <div>
              <form onSubmit={onSubmit} className="user">
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-user"
                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                        placeholder="Enter Email Address..."
                                        name="email"
                                        onChange={onChange}
                                        value={form.email}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-user"
                                        id="exampleInputPassword" placeholder="Password"
                                        name="password"
                                        onChange={onChange}
                                        value={form.password}/>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox small">
                                        <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                        <label className="custom-control-label" for="customCheck">Remember
                                            Me</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-user btn-block">
                                    Login
                                </button>
                                <hr/>
                                <Link to="index" className="btn btn-google btn-user btn-block">
                                    <i className="fab fa-google fa-fw"></i> Login with Google
                                </Link>
                                <Link to="index" className="btn btn-facebook btn-user btn-block">
                                    <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                </Link>
                            </form>  
            </div>
        )
    }
}
