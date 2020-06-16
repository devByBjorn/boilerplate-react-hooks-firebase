import React, { useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { logout } from '../firebase/actions'

const Header = props => {
  const requestLogout = useCallback(() => { logout() }, [])

  return (
    <div>
      <button onClick={requestLogout}>logout</button>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/private">Private Route</NavLink>
    </div>
  )
}

export default Header
