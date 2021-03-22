import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const app = firebase.initializeApp({
  apiKey: "AIzaSyB_zTZfjZyxMvwVbRuU29MuzldMmni0I4Y",
  authDomain: "movieapp-aed3c.firebaseapp.com",
  projectId: "movieapp-aed3c",
  storageBucket: "movieapp-aed3c.appspot.com",
  messagingSenderId: "936539062356",
  appId: "1:936539062356:web:a1722ea9f7532aeb262dc1"
})

export const auth = app.auth()
export const firestore = firebase.firestore()

export default app