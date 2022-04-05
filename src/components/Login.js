// componenet use to display the login page and handle the login process
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UseAuth } from '../context/UseAuth';
import { Alert } from './Alert';

export const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  
  // login is the context used tu authenticate the user from authcotext
  const { login, loginWithGoogle, resetPassword } = UseAuth();
  // navigate is the context used to navigate to the next page
  const navigate = useNavigate();
  
  const [error, setError] = useState();

  //Todo: handle the login process
  const handleChange = ({target: {name, value}}) => {
    setUser({
      ...user,
      [name]: value
    })
  }
  // used to handle the login process in firebase
  const handleSubmit = async(e) => {
    e.preventDefault();
    setError('');
    try {
      // signup is the function used to authenticate the user and it returns a promise
      await login(user.email, user.password);
      navigate('/');
      
    } catch (error) {
      setError(error.message);
    }
  }

  const HandleGoogleLogin = async () => {
    try {
      // signup is the function used to authenticate the user and it returns a promise
      await loginWithGoogle();
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  }

  const handleResetPassword = async(e) => {
    //validations
    try {
      await resetPassword(user.email);
    } catch (error) {
      setError(error.message);
    }

  }

  return (
    <div className='w-full max-w-xs m-auto'>
      { error && <Alert message={error}/> }

    <form onSubmit={handleSubmit}
    className='bg-white shadow-md rounded px-8 
    pt-6 pb-8 mb-4'>

      <div className='mb-4'>
        <label htmlFor='email'
        className='block text-gray-700 text-sm font-bold mb-2'
        >Email </label>
        <input 
        className='shadow appearance-none border rounded w-full py-2 px-3
         text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        name='email'
        type='email' 
        placeholder='youreamil@mail.com'
        onChange={handleChange} />
      </div>

      <div className='mb-4'>
        <label htmlFor='password'>Password </label>
        <input
        className='shadow appearance-none border rounded w-full py-2 px-3
         text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
        name='password'
        type='password' 
        placeholder='********' 
        onChange={handleChange}/>
      </div>

      <div className='flex items-center justify-between'>
        <button
        className="bg-blue-500 hover:bg-blue-700 text-white 
        font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >Login</button>
        <a 
        href='#'
        className='inline-block align'
        onClick={()=> handleResetPassword()}
        >Forgot Password?
        </a>
      </div>

    </form>

      <p
      className='text-center text-gray-500 text-xs flex justify-between py-3'
      >Dont have an account
      <Link to='/register'>Register</Link>
      </p>

      <button
      className="bg-slate-50 hover:bg-sale-200 text-white 
      font-bold border-2 border-gray-200 py-2 px-4 rounded"
      onClick={() => HandleGoogleLogin()}
      >Google Login
      </button>
    </div>
  )
}

