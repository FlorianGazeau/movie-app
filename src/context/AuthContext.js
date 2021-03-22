import React, {useState, useEffect, useContext} from 'react'
import { auth } from '../firebase/firebase';
import 'firebase/firestore'
import firebase from 'firebase/app'
import 'firebase/auth'

export const firestore = firebase.firestore()
const AuthContext = React.createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider = ({children}) =>  {

  const [currentUser, setCurrentUser] = useState();

  const googleProvider = new firebase.auth.GoogleAuthProvider()
  const signInWithGoogle = () => {
    return auth.signInWithPopup(googleProvider)
  }

  const handleUserProfile = (user) => {

    const { uid, displayName } = user

    firestore
    .doc(`users/${uid}`)
    .set({
      displayName
    })
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    return unsubscribe
  }, []);

  const value = {
    currentUser,
    signInWithGoogle,
    handleUserProfile
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
