import { firebase, googleAuthProvider } from '../firebase/firebase'

// login
const login = () => {
  return new Promise((resolve, reject) =>
    firebase.auth()
      .signInWithPopup(googleAuthProvider)
      .then(() => resolve())
      .catch(error => reject(error))
  )
}

// logout
const logout = () => firebase.auth().signOut()

export { login, logout }