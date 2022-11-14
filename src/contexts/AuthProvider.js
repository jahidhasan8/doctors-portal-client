import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
 
const auth=getAuth(app)
export const AuthContext=createContext()

const AuthProvider = ({children}) => {
   const[user,setUser]=useState('')
     

//    create new user
 const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
 }

//  login user
  const logIn=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)

  }

   useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)

        return(()=>unsubscribe())
    })
   },[])

   const authInfo={
    user,
    createUser,
    logIn

   }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;