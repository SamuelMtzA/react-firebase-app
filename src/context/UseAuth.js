import { useContext } from 'react'
import { Authcontext } from './authContext';

export const UseAuth = () => {
  const context =  useContext(Authcontext);
  if (!context) {
    throw new Error('useAuth must be used within an Authcontext Provider');
  }
  return context;
}
