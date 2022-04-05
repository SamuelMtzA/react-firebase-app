import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { UseAuth } from '../context/UseAuth';
import { Alert } from './Alert';

export const Register = () => {

  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  
  // signup is the context used tu authenticate the user
  const {signup} = UseAuth();
  // navigate is the context used to navigate to the next page
  const navigate = useNavigate();
  
  const [error, setError] = useState();

  const handleChange = ({target: {name, value}}) => {
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError('');
    try {
      // signup is the function used to authenticate the user and it returns a promise
      await signup(user.email, user.password);
      navigate('/');
      
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className='w-full max-w-xs m-auto'>
      {error && <Alert message={error}/>}

      <form onSubmit={handleSubmit}
      className = 'bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
      >
        <div className='mb-4'>
          <label 
          className='block text-gray-700 text-sm font-bold my-2'
          htmlFor='email'>Email </label>
          <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
          name='email'
          type='email' 
          placeholder='youreamil@mail.com'
          onChange={handleChange} />
        </div>

        <div className='mb-4'>
          <label 
          className='block text-gray-700 text-sm font-bold my-2'
          htmlFor='password'>Password </label>
          <input 
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          name='password'
          type='password' 
          placeholder='********' 
          onChange={handleChange}/>
        </div>

      <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >Register</button>
    </form>

    <p
    className='text-center text-gray-500 text-xs flex justify-between py-3'
    >Already have an account
    <Link to='/login'>Register</Link>
    </p>
    </div>
  )
}
