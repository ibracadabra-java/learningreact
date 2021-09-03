import React,{useState} from 'react'
import {Loading} from './Loading'
import Login from './Login'
import "./styles/Register.css"

export function LoginContainer() {
    const [form,setForm] = useState({})
    const [loading,setLoading] = useState(false)
    const [nombreCompleto,setFullname] = useState()
   const handleSubmit = async e =>{
       setLoading(true)
        e.preventDefault()
        try {
            let config = {
                method : 'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-type':'application/json'
                },
                body:JSON.stringify(form)
            }
            let res = await fetch('https://localhost:44384/api/account/login',config)
            let json = await res.json()
            setFullname(json.result.fullName)
            console.log(json)            
            setForm(json)
            setLoading(false)  
            console.log(nombreCompleto)          
            /*history.push('/home',json.result.fullName)*/
        } catch (error) {
            setLoading(false)
        }
        console.log(form)
    }
   const handleChange = e =>{
        setForm({...form,
            [e.target.name]:e.target.value})
                
            
    }
    if(loading)
    return <Loading/>
    return (
        <Login form={form}
        onSubmit={handleSubmit}
        onChange={handleChange}/>
    )
}

/*class LoginContainer extends React.Component {
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
        <Login form={this.state.form}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}/>
    )
}
}
export default LoginContainer*/