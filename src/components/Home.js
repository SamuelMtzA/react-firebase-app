import React from 'react'
import { UseAuth } from '../context/UseAuth';

export const Home = () => {
  const {user} = UseAuth();
  console.log(user);

  return (
    <div>Home</div>
  )
}
