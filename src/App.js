//import React from "react";
import Header from './components/cabecera/header';
import Histori from './components/historias/histori'
import Pincard from "./components/carta/pincard";
import Recomiendo from "./components/recomendaciones/recomendacion";
import Media from 'react-media';

const App = () => {
  return <div>
      <Media query="(max-width: 999px)">
        {(matches)=>{
            return matches ? Noexiste() : ExsiteS();
        }}
      </Media>
    </div>;
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
