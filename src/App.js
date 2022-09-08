import React from 'react'
import './App.css';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Register from './components/Register';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse'
import Login from './components/Login';
import Addproduct from './Addproduct';
import Products from './components/Products';
import Update from './components/Update';

class App extends React.Component {
  render(){
  return (
    <div className="">
      <Router>
        <Menu />
        <Routes>
        <Route path="/products" element={<Products/>}/>
        <Route  path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/addproduct" element={<Addproduct/>}/>
        <Route path="/update/:id" element={<Update/>}/>
        </Routes>
      </Router>
    </div>
  );
}
}
export default App;
