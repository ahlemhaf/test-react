import React,{ useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function Modif() {
    const  navigate = useNavigate();
    const params = useParams();
    const [product,setProduct]=useState({
        Name:'',
        Description:'',
       
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
      const data= await  axios.get(`http://localhost:3000/todo/${params.id}`)
      setProduct(data.data)
    }
    fetchdata()
},[params.id]);

    
    const handleSubmit = async () => {

        await  axios.put(`http://localhost:3000/todo/${params.id}`,product)
        navigate('/liste');
                 }

   

  return (
    <div className='d-flex flex-column align-items-center'>
            <h1 >Modif To-Do </h1>
            <form className='p-3 col-6'>
            <div className="form-group">
                <label forhtml="name"> Name: </label>
                <input type="text" onChange={handleChange} value={product.Name} className="form-control" id="Name" />
            </div>
            <div className="form-group">
                <label forhtml="name"> Description: </label>
                <input type="text" onChange={handleChange} value={product.Description} className="form-control" id="Description" />
            </div>

        </form>
        <button type="button"  onClick={handleSubmit} className="btn btn-primary" >Update </button>

        </div>
  )
}

export default Modif