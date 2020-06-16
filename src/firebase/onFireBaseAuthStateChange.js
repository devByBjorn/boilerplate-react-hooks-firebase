import { firebase, } from '../firebase/firebase'

// firebase listener
const onFirebaseAuthStateChange = callBack =>
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      callBack({ loggedIn: true, uid: user.uid })
    } else {
      callBack({ loggedIn: false })
      console.log('The user is not logged in')
    }
  })

export default onFirebaseAuthStateChange