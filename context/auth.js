import { auth } from '../firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react';

export const AuthContext = React.createContext();

function AuthWrapper({ children }) {

  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    onAuthStateChanged(auth, (user) => {
        setUser(user);
    })

    setLoading(false);
  
  }, [])
  

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout(){
    console.log('logging out');
    return signOut(auth);
  }

  function forgotPass(email){
    console.log('coming');
    return sendPasswordResetEmail(auth, email);
  }

  function signup(email, password){

    return createUserWithEmailAndPassword(auth, email, password);

  }

  const store = {
    login,
    logout,
    forgotPass,
    signup,
    user

  }

  return (
    <AuthContext.Provider value={store}>
      {/* jo bhi children hai store ki cheeze access kr skte hai */}
      {!loading && children}

    </AuthContext.Provider>
  )
}

export default AuthWrapper