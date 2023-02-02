import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import AddItem from './pages/form/AddItem';

function App() {
  return (
    <>
     <Router >       
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/addItem' element={<AddItem />} />
        </Routes>
    </Router>
    <ToastContainer />
      
    </>
  );
}

export default App;
