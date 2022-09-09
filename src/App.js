import React from 'react'
import './App.css';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse'
import Register from './Register';
import Login from './Login';
import Liste from './components/Liste';
import TodoList from './TodoList';
import Modif from './components/Modif';
import Ajout from './components/Ajout';


class App extends React.Component {
  render(){
  return (
    <div className="">
      <Router>
        <TodoList />
        <Routes>
        <Route path="/liste" element={<Liste/>}/>
        <Route  path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/modif/:id" element={<Modif/>}/>
        <Route path="/ajout" element={<Ajout/>}/>
        </Routes>
      </Router>
    </div>
  );
}
}
export default App;
