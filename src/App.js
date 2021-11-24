//import React from "react";
import Header from './components/cabecera/header';
import Histori from './components/historias/histori'
import Pincard from "./components/carta/pincard";
import Recomiendo from "./components/recomendaciones/recomendacion";
import Media from 'react-media';
import {useState} from 'react';
import firebase from '@firebase/app-compat';
import Login from './components/LoginLayout/Login';

const App = () => {
  const [isUserSignIn,setIsUserSignIn] = useState(false);
  firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
      return setIsUserSignIn(true)
    } else{
      setIsUserSignIn(false)
    }
  })
  if (isUserSignIn === true) {
      return( <div>
        <Media query="(max-width: 1100px)">
          {(matches)=>{
              return matches ? Noexiste() : ExsiteS();
          }}
        </Media>
      </div>);
  } else if(isUserSignIn === false){
    return( <div>
      <Login/>
    </div>);
  }
  
};

const ExsiteS = () => {
  return <div>
      <Header/>
      <Histori/>
      <Pincard/>
      <Recomiendo/>
    </div>;
};

const Noexiste = () => {
  return <div>
      <Header/>
      <Histori/>
      <Pincard/>
    </div>;
};

export default App;
