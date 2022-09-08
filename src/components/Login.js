import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const navigate=useNavigate()
const [loginForm,setLoginForm]=useState({
  email:'',
  password:''
})

const handleChange=(e)=>{
const {id,value}=e.target
setLoginForm(()=>{
    return {...loginForm,[id]:value}
})

}

const handleSubmit = async() => {
const users = await axios.get('http://localhost:3000/users')    
          const trouve = users.data.find((user) =>
           user.email === loginForm.email && user.password===loginForm.password);
            if(trouve) 
            {  navigate('/products') }
             else{  
               alert('verifier votre email et votre mot de passe '); 
             }
  }

  return (
    <div className='d-flex flex-column align-items-center '>
        <h1>Form Login</h1>
        <div className="form-group">
                <label forhtml="email">Email:</label>
                <input type="Email"  onChange={handleChange} className="form-control" id="email" placeholder="Entrez votre Email" />
            </div>
            <div className="form-group">
                <label forhtml="password">Password:</label>
                <input type="password" onChange={handleChange} className="form-control" id="password" placeholder="Entrez votre Password" />
            </div>

            <button type="button" onClick={handleSubmit} className="btn btn-primary m-3" >Submit</button>

    </div>
  )
}

export default Login
