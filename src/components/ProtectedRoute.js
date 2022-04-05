//protect the route from unauthorized users
import React from 'react'
import { Navigate } from 'react-router-dom';
import { UseAuth } from '../context/UseAuth'

export const ProtectedRoute = ( {children} ) => {
    const {user, loading} =  UseAuth();
    
    if (loading) return <p>Loading...</p>;
    if (!user) return <Navigate to="/login"/>;
    //Todo: if the user is logged in, render the children, <Home/>

    return (
    <>
        {children}

    </>
    )
}
