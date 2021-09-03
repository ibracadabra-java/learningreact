import React, { useState } from 'react'
import Register from './Register'
import {Loading} from './Loading'

export function RegisterContainer() {
    const [form,setForm] = useState({fullName:""})
    const [loading,setLoading] = useState(false)
    const [fullname,setFullname] = useState("")
    
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
            let res = await fetch('https://localhost:44384/api/account/register',config)
            let json = await res.json()

            setFullname(form.fullName)     

            setLoading(false)

           /* this.props.history.push('/home',fullname)*/
        } catch (error) {
           setLoading(false)
        }
        console.log(form)
    }
   const handleChange = e =>{
        setForm({...form,[e.target.name]:e.target.value})
        
        
    }

    if(loading)
    return<Loading/>
    return (
        <Register form={form}
            onSubmit={handleSubmit}
            onChange={handleChange}/>  
    )
}