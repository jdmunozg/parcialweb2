import React from "react";

function Circule(props){
    return(
            <button style={estiloPin.boton}>
                <div style={estiloPin.profiel}>
                    <img src={props.image} style={estiloPin.imagenes} alt="Imagen"></img>
                </div>
                <div style={estiloPin.texto}>
                    {props.title}
                </div>
            </button>
    )
}

const estiloPin={
    boton:{
        border:'0',
        backgroundColor:'transparent',
        cursor:'pointer',
        margin: '0 5px',
    },
    profiel:{
       // background:'rgb(255,201,0)',
        background:'linear-gradient(36deg, rgb(255,201,0) 13%, rgb(255,0,95) 73%, rgb(255,9,237) 100%)',
        //padding:'2px 2px 2px 2px',
        boxSizing:'border-box',
        width:'70px',
        height:'70px',
        borderRadius:'50%',
        display:'flex',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
    },
    imagenes:{
        width:'58px',
        height:'58px',
        borderRadius:'50%',
        padding:'0',
        margin:'0',
        border:'solid 4px #fff'
    },
    texto:{
        textAlign:'center',
        padding:'2px 0',
        fontFamily:"sans-serif",
        //fontWeight: " bolder",
        fontSize:'12px',
        backgroundColor:'white',
    }
}

export default Circule;