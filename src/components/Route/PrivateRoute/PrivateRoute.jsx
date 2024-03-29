import React from 'react'
import { Redirect, Route } from 'react-router'
import { useAuth } from '../../../context/AuthContext'


const PrivateRoute = ({ component: Component, ...rest }) =>  {

  const { currentUser } = useAuth()

  return (
    <Route {...rest} render={(props) => (
      currentUser ? <Component {...props} />
      : <Redirect to="/" />
    )}  />
  )
}

export default PrivateRoute
