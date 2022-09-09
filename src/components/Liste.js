import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



function Liste() {
  const [products, setProduct] = useState([]);
  const fetchdata = async () => {
    const prod = await axios.get('http://localhost:3000/todo')
 
    setProduct(prod.data)

  }
  const handleDelete = async (productId) => {
    console.log({productId});
    await axios.delete(`  http://localhost:3000/todo/${productId}`)
    fetchdata()
  }
  useEffect(() => {
    fetchdata()
  }, [])
  return (
    <div className='d-flex flex-column  align-items-center m-3'>
      <h1 className='text-center ' > Liste To-Do</h1>
      <Link className="btn btn-primary m-2 " type="button" to="/ajout">add To-Do</Link>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Actions  </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.Name}</td>
                <td>{product.Description}</td>
                <td>  <Link className="btn btn-success m-2" type="button" to= {`/modif/${product.id}`}>Update</Link>
                  <button className="btn btn-danger m-2" onClick={()=>handleDelete(product.id)}>Delete</button></td>

              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
  )
}

export default Liste