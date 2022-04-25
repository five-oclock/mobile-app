// Stolen from https://github.com/diegocasmo/expo-firebase-authentication/blob/main/src/api/user.js

// import firebase from '../firebase'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'

export const getUser = () => getAuth().currentUser

export const onAuthStateChanged = (args) =>
  getAuth().onAuthStateChanged(args)

// Notice Firebase automatically signs user in when their account is created
export const signUp = async ({ email = '', password = '' }) => {
    console.log(`Creating account for ${ email }`)
    let user = await createUserWithEmailAndPassword(getAuth(), email, password)
    sendVerification(user.user)
}

export const signIn = ({ email = '', password = '' }) =>
  getAuth().signInWithEmailAndPassword(email, password)

export const sendVerification = (user) => sendEmailVerification(user)

export const signOut = () => getAuth().signOut()

export const reload = () => getUser().reload()

export const reauthenticate = ({ email = '', password = '' }) =>
  getUser().reauthenticateWithCredential(
    getAuth.EmailAuthProvider.credential(email, password)
  )

export const updatePassword = ({ password = '' }) =>
  getUser().updatePassword(password)

export const sendPasswordReset = ({ email = '' }) =>
  getAuth().sendPasswordResetEmail(email)