// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABVoxvCiexdMRpL09Zntk62Ofd20wzcDU",
  authDomain: "fifth-handbook-327023.firebaseapp.com",
  projectId: "fifth-handbook-327023",
  storageBucket: "fifth-handbook-327023.appspot.com",
  messagingSenderId: "546200629320",
  appId: "1:546200629320:web:57f1032a66037aec8f687d",
  measurementId: "G-J07H7N33KN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export {firebase}