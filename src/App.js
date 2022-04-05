// ?component that renders the login and signup forms
import React, { useEffect, useState } from 'react'
import { AppRoutes } from './components/AppRoutes';
import { Authcontext } from './context/authContext';
import { createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signInWithEmailAndPassword,
  GoogleAuthProvider ,
  signInWithPopup,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth } from './firebase.config';

const App = () => {
  //Todo email and password are the state variables for the login form
  const signup = (email, password) => 
  createUserWithEmailAndPassword(auth, email, password);

  const login = async(email, password) => 
  signInWithEmailAndPassword(auth, email, password);
  //Todo auth is the context used to authenticate the user from authcotext 
  const logout = () => auth.signOut(auth);
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    //Todo signInWithPopup is the function used to authenticate the user from authcotext
    return signInWithPopup(auth, googleProvider);
  }

  const resetPassword = () => sendPasswordResetEmail(auth, user.email);
  

  //Todo: know if the user is logged in or not
  useEffect(() => {
    console.log('App is running');
    const unsuscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    //cleanup function
    return () => unsuscribe();
  }, [])
  
  //? properties of the context are signup, login, user, logout, loading ...
  return (
    <Authcontext.Provider 
    value={{signup, login, user, logout, loading, loginWithGoogle, resetPassword}}>  
      <div className='bg-state-300 h-screen text-white flex'>
        <AppRoutes/>
      </div>
    </Authcontext.Provider>
  )
}

export default App;
