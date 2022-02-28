import React from 'react'
import { AppRoutes } from './components/AppRoutes';
import { Authcontext } from './context/authContext';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase.config';



export const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

const App = () => {
  
  return (
    <Authcontext.Provider value={{signup}}>  
      <div className='bg-state-300 h-screen text-white flex'>
        <AppRoutes/>
      </div>
    </Authcontext.Provider>
  )
}
 export default App;
