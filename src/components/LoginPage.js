import React, { useCallback } from 'react'
import { login, } from '../firebase/actions'

const LoginPage = () => {

  const requestLogin = useCallback(() => login())

  return (
    <button onClick={requestLogin}>login</button>
  )
}

export default LoginPage