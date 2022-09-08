import React,{ useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const  navigate = useNavigate();
    const params = useParams();
    const [product,setProduct]=useState({
        Name:'',
        Price:'',
        Quantity:'',
    })
    const handleChange =(e) =>{
        const {id,value} = e.target
        setProduct(()=>{
            return {...product, [id]:value}
        })
    }


    useEffect(()=>{
    const fetchdata = async ()=>
    {
      const data= await  axios.get(`http://localhost:3000/Products/${params.id}`)
      setProduct(data.data)
    }
    fetchdata()
},[params.id]);

    
    const handleSubmit = async () => {

        await  axios.put(`http://localhost:3000/Products/${params.id}` ,product)
        navigate('/products');
                
                 }

   

  return (
    <div className='d-flex flex-column align-items-center'>
            <h1 >Update Product </h1>
            <form className='p-3 col-6'>
            <div className="form-group">
                <label forhtml="name"> Name: </label>
                <input type="name" onChange={handleChange} value={product.Name} className="form-control" id="Name" />
            </div>
            <div className="form-group">
                <label forhtml="Price"> Price: </label>
                <input type="number" onChange={handleChange} value={product.Price} className="form-control" id="Price" />
            </div>
            <div className="form-group">
                <label forhtml="Quantity"> Quantity: </label>
                <input type="Quantity" onChange={handleChange} value={product.Quantity} className="form-control" id="Quantity" />
            </div>

        </form>
        <button type="button"  onClick={handleSubmit} className="btn btn-primary" >Update product</button>

        </div>
  )
}

export default Update