import { createContext } from 'react'


const initalAuthState = { loggedIn: false, uid: '' }
const AuthContext = createContext(initalAuthState)
const AuthProvider = AuthContext.Provider
const AuthConsumer = AuthContext.Consumer

export { AuthContext, AuthProvider, AuthConsumer }