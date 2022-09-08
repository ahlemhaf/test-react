import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Addproduct() {
    const navigate=useNavigate();

const[productForm,setProductForm]=useState({
    Name:'',
    Price:'',
    Quantity:''
})
const handleChange =(e)=>{
    const {id,value}=e.target
    setProductForm(()=>{
        return {...productForm,[id]:value}
    })
}

const handleSubmit=async() =>{
    const products =await axios.post('http://localhost:3000/Products',productForm)
    console.log(products);
    {navigate ('/products' ) }
}

  return (
    <div className='d-flex flex-column align-items-center'>
    <h1 >Add Product </h1>
    <form className='p-3 col-6'>
    <div className="form-group">
        <label forhtml="name"> Name: </label>
        <input type="name" onChange={handleChange} className="form-control" id="Name" />
    </div>
    <div className="form-group">
        <label forhtml="Price"> Price: </label>
        <input type="number" onChange={handleChange} className="form-control" id="Price" />
    </div>
    <div className="form-group">
        <label forhtml="Quantity"> Quantity: </label>
        <input type="Quantity" onChange={handleChange} className="form-control" id="Quantity" />
    </div>

</form>
<button type="button"  onClick={handleSubmit} className="btn btn-primary" >Add</button>

</div>
  )
}

export default Addproduct
