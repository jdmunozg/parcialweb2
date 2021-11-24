
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyABVoxvCiexdMRpL09Zntk62Ofd20wzcDU",
  authDomain: "fifth-handbook-327023.firebaseapp.com",
  projectId: "fifth-handbook-327023",
  storageBucket: "fifth-handbook-327023.appspot.com",
  messagingSenderId: "546200629320",
  appId: "1:546200629320:web:57f1032a66037aec8f687d",
  measurementId: "G-J07H7N33KN"
};


firebase.initializeApp(firebaseConfig)

export {firebase}