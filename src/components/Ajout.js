import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Ajout() {
    const navigate=useNavigate();

const[productForm,setProductForm]=useState({
    Name:'',
    Description:'',
 
})
const handleChange =(e)=>{
    const {id,value}=e.target
    setProductForm(()=>{
        return {...productForm,[id]:value}
    })
}

const handleSubmit=async() =>{
    const todo =await axios.post('http://localhost:3000/todo',productForm)
    console.log(todo);
    {navigate ('/liste') }
}

  return (
    <div className='d-flex flex-column align-items-center'>
    <h1 >Add To-Do </h1>
    <form className='p-3 col-6'>
    <div className="form-group">
        <label forhtml="name"> Name: </label>
        <input type="text" onChange={handleChange} className="form-control" id="Name" />
    </div>
  
    <div className="form-group">
        <label forhtml="name"> Description: </label>
        <input type="text" onChange={handleChange} className="form-control" id="Description" />
    </div>
    

</form>
<button type="button"  onClick={handleSubmit} className="btn btn-primary" >Add</button>

</div>
  )
}

export default Ajout
