import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UseAuth } from '../context/UseAuth';

export const Register = () => {

  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  
  const {signup} = UseAuth();
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
      await signup(user.email, user.password);
      navigate('/');
      
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      {error && <p className='text-red-500'>{error}</p>}

      <form onSubmit={handleSubmit}>
      <label htmlFor='email'>Email </label>
      <input 
      name='email'
      type='email' 
      placeholder='youreamil@mail.com'
      onChange={handleChange} />

      <br/>
      <label htmlFor='password'>Password </label>
      <input 
      name='password'
      type='password' 
      placeholder='********' 
      onChange={handleChange}/>
      <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >Register</button>
    </form>
    </div>
  )
}
