import React from 'react'
import { Routes, Route} from "react-router-dom";
import { Home } from './Home';
import { Login } from './Login';
import { Register } from './Register';

export const AppRoutes = () => {
  return (
    <div className='bg-state-300 h-screen text-white flex'>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
        </Routes>
    </div>
  )
}
