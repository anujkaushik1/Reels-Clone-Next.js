import { auth } from '../firebase'
import { onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react';

export const AuthContext = React.createContext();

function AuthWrapper({ children }) {

  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    onAuthStateChanged(auth, (user) => {

      if(user){     //already user hai toh ffed page else login page
        setUser(user);
      }
    })

    setLoading(false);
  
  }, [])
  

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout(){
    return signOut(auth);
  }

  function forgotPass(email){
    console.log('coming');
    return sendPasswordResetEmail(auth, email);
  }

  const store = {
    login,
    logout,
    forgotPass,
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