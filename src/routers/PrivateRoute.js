import React, { Fragment, useEffect, useCallback, useState } from 'react'
import onFirebaseAuthStateChange from '../firebase/onFireBaseAuthStateChange'
import { Route, Redirect } from "react-router-dom"
import Header from '../components/Header'


export const PrivateRoute = ({ component: Component, ...restOfprops }) => {
  const [user, setUser] = useState({ loggedIn: true })

  useEffect(() => {
    const unsubscribe = onFirebaseAuthStateChange(setUser)
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <Route {...restOfprops} component={(props) => (
      user.loggedIn
        ? (
          <Fragment>
            <Header />
            <Component {...props} />
          </Fragment>
        )
        : (
          <Redirect to="/" />
        )
    )} />
  )
}

export default PrivateRoute
