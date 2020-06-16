import React, { useEffect, useCallback, useState } from 'react'
import onFirebaseAuthStateChange from '../firebase/onFireBaseAuthStateChange'
import { Route, Redirect } from "react-router-dom"

export const PublicRoute = ({ component: Component, ...rest }) => {
  const [user, setUser] = useState({ loggedIn: false })

  useEffect(() => {
    const unsubscribe = onFirebaseAuthStateChange(setUser)
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <Route {...rest} component={(props) => (
      !user.loggedIn
        ? (
          <Component {...props} />
        )
        : (
          <Redirect to="/dashboard" />
        )
    )} />
  )
}

export default PublicRoute