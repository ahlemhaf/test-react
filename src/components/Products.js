import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



function Products() {
  const [products, setProduct] = useState([]);
  const fetchdata = async () => {
    const prod = await axios.get('http://localhost:3000/Products')
 
    setProduct(prod.data)

  }
  const handleDelete = async (productId) => {
    console.log({productId});
    await axios.delete(`http://localhost:3000/Products/${productId}`)
    fetchdata()
  }
  useEffect(() => {
    fetchdata()
  }, [])
  return (
    <div className='d-flex flex-column  align-items-center m-3'>
      <h1 className='text-center ' > Mes produits</h1>
      <Link className="btn btn-primary m-2 " type="button" to="/addproduct">AddProduct</Link>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Actions  </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.Name}</td>
                <td>{product.Price}</td>
                <td>{product.Quantity}</td>
                <td>  <Link className="btn btn-success m-2" type="button" to= {`/update/${product.id}`}>Update</Link>
                  <button className="btn btn-danger m-2" onClick={()=>handleDelete(product.id)}>Delete</button></td>

              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
  )
}

export default Products