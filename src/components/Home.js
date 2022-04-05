// componenet use to display the home page
import React from 'react'
import { UseAuth } from '../context/UseAuth';

export const Home = () => {
  const {user, logout, loading} = UseAuth();
  console.log(user);
  
  //? logout is the function used to logout the user from authcotext
  const handleLogout = async() => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  }

  if (loading) <p>Loading...</p>;

  return (
    <div className='w-full max-w-xs m-auto text-black'>
      <div
      className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
      >
        <h1 className='text-x1 mb-4'
        >Welcome {user.photoUrl || user.email}</h1>
      </div>


      <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleLogout}
      >Logout</button>
    </div>
  )
}
