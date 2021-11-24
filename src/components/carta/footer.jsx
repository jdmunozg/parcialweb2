import React from "react";
import Cabecerafooter from "./contentFoooter/cabecerafooter";
import Commentarios from './contentFoooter/commentslikes';
import Escribir from "./contentFoooter/escribirComentario";

class Construcctorfooter extends React.Component{

    estiloFooter(){
        return{
            width:'100%',
            height:'213px',
        }
    }

    render(){
        return(
            <div style={this.estiloFooter()}>
                <Cabecerafooter/>
                <Commentarios/>
                <Escribir/>
            </div>
        )
    }
}



function Footer (){
    return(
        <Construcctorfooter/>
    )
}

export default Footer;