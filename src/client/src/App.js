import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import {PrivateRoute} from "./components/PrivateRoute";
import Task from "./pages/TaskManager";
import About from "./pages/About";
import {useEffect, useState} from "react";

function App() {
    const [access, setAccess] = useState(localStorage.getItem('accessToken'))
    useEffect(() => {
        setAccess(localStorage.getItem('accessToken'))
    },)
    return (
      <BrowserRouter>
          <div className="container">
              <header className="d-flex justify-content-center py-3">
                  <ul className="nav nav-pills">
                      <li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Home</Link></li>
                      <li className="nav-item"><Link to="login" className="nav-link">{access? 'Profile': 'Login'}</Link></li>
                      <li className="nav-item"><Link to="about" className="nav-link" aria-current="page">About</Link></li>
                  </ul>
              </header>
              <hr/>
          </div>
          <Routes>
              <Route path='/' element={
                  <PrivateRoute auth={{isAuthenticated:access}}>
                      <Task/>
                  </PrivateRoute>
              }></Route>
              <Route path="/About" element={<About/>}></Route>
              <Route path="/Login" element={<Login/>}></Route>
              <Route path="/Registration" element={<Registration/>}></Route>
          </Routes>
      </BrowserRouter>
    );
}

export default App;
