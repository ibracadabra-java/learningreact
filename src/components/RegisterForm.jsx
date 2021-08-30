import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class RegisterForm extends Component {
    render() {
        const {onSubmit,form,onChange} = this.props
        return (
            <div>
                 <form onSubmit={onSubmit} className="user">
                            <div className="form-group">                            
                            <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                            placeholder="Full Name"  onChange={onChange} name="fullName" value={form.fullName}/>                                                                     
                            </div>
                            <div className="form-group">
                                    <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                        placeholder="Email Address"  onChange={onChange} name="email" value={form.email}/>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="password" className="form-control form-control-user"
                                            id="exampleInputPassword" placeholder="Password"  onChange={onChange} name="Password" value={form.Password}/>
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="password" className="form-control form-control-user"
                                            id="exampleRepeatPassword" placeholder="Repeat Password"  onChange={onChange} name="ConfirmationPassword" value={form.ConfirmationPassword}/>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-user btn-block">
                                    Register Account
                                </button>
                                <hr/>
                                <Link to="index" className="btn btn-google btn-user btn-block">
                                    <i className="fab fa-google fa-fw"></i> Register with Google
                                </Link>
                                <Link to="index" className="btn btn-facebook btn-user btn-block">
                                    <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                </Link>
                            </form>
            </div>
        )
    }
}
