import React, { Component } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Users from './components/Users';
import "bootstrap/dist/css/bootstrap.min.css"

function App(){
    return (
        <div className="App">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" href="/register">Register</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/login">Login</a>
                </li>
            </ul>
            <BrowserRouter>
                <Routes>
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/users" element={<Users/>}></Route>
                </Routes>
            </BrowserRouter>
    </div>
                     
    );
}

export default App;