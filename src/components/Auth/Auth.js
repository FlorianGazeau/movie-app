import React from 'react'
import {useAuth} from '../../context/AuthContext'


const Auth = () => {

  const { signInWithGoogle, handleUserProfile } = useAuth()

  async function handleSignInWithGoogle() {
    const {user} = await signInWithGoogle()
    handleUserProfile(user)
  }

  return (
    <div>
      <button onClick={handleSignInWithGoogle}>Sign in with Google</button>
    </div>
  )
}

export default Auth
