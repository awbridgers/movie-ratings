import React, {useState, createContext, useEffect} from 'react';
import {auth} from './config';
import firebase from 'firebase/app';

interface IProvider {
  children: React.ReactNode;
}

export const AuthContext = createContext<firebase.User | null>(null);


const AuthProvider = ({children}: IProvider) =>{
  const [user, setUser] = useState<firebase.User | null>(null)
  console.log(user)
  useEffect(()=>{
    return auth.onAuthStateChanged((user)=>setUser(user))
  },[])
  return (
    <AuthContext.Provider value = {user}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider