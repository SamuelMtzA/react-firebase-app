// create the routes for the app
import React from 'react'
import { Routes, Route} from "react-router-dom";
import { Home } from './Home';
import { Login } from './Login';
import { ProtectedRoute } from './ProtectedRoute';
import { Register } from './Register';

export const AppRoutes = () => {
  return (
    <div className='bg-state-300 h-screen text-white flex'>
        <Routes>
            <Route 
            path="/" element= {
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
        </Routes>
    </div>
  )
}
