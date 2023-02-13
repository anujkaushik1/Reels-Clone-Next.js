import { auth } from 'firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react';

export const AuthContext = React.createContext();

function AuthWrapper({children}) {
  
    function login(email, password){

        return signInWithEmailAndPassword(auth, email, password);

    }

    const store = {

        login

    }

  return (
    <AuthContext.Provider value={store}>
        {/* jo bhi children hai store ki cheeze access kr skte hai */}
        {children}     

    </AuthContext.Provider>
  )
}

export default AuthWrapper