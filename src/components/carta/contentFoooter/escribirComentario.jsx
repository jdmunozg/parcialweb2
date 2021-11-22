import React from "react";


function Icono(){
    return(
        <div style={estiloEscribe.estiloIcono}>
            <svg aria-label="Emoji" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path><path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path></svg>
        </div>
    )
}


class Inputs extends React.Component{
    constructor(props){
        super(props);
        this.state={value: '',};
        this.nameHandler = this.nameHandler.bind(this);
    }

    nameHandler(event){
        this.setState({value: event.target.value});
        
    }

    estiloBoton(){
        if(this.state.value === ''){
            return{
                //width:'76px',
                fontFamily:"sans-serif",
                fontSize:'13.5px',
                color:'  #85c1e9  ',
                fontWeight: " bolder",
                border:'0',
                backgroundColor:'white',
                //cursor:'pointer',
                //disabled:'true',
            }
        }
        else{
            return{
                //width:'76px',
                fontFamily:"sans-serif",
                fontSize:'13.5px',
                color:' #3498db ',
                fontWeight: " bolder",
                border:'0',
                backgroundColor:'white',
                cursor:'pointer',

            }
        }
    }

    render(){
        return(
            <div style={estiloEscribe.estiloImpro}>
            <div style={estiloEscribe.estiloInput}>
            <input type='text' style={estiloEscribe.inP} onChange={this.nameHandler}  id='escribe' placeholder="Agrega un comentario..."></input>
            </div>
            <div style={estiloEscribe.boton}>
                <button style={this.estiloBoton()}>Publicar</button>
            </div>
            </div>
        )
    }
}

function Escribir(){
    return(
        <div style={estiloEscribe.estiloEsc}>
            <Icono/>
            <Inputs/>
        </div>
    )
}



const estiloEscribe={
    estiloEsc:{
        width:'100%',
        height:'50px',
        backgroundColor:'white',
        display:'flex',
    },
    estiloIcono:{
        width:'50px',
        height:'50px',
        backgroundColor:'white',
        marginLeft:'10px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    normal:{
        backgroundColor:'white',
    },
    estiloInput:{
        width:'80%',
        height:'50px',
        backgroundColor:'white',
    },
    inP:{
        width:'100%',
        height:'50px',
        border:'0',
        outline: 'none',
        paddingLeft:'5px',
        fontSize:'15px',
        backgroundColor:'white',
        
    },
    boton:{
        width:'20%',
        height:'50px',
        backgroundColor:'white',
        //marginLeft:'0px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    estiloImpro:{
        width:'100%',
        height:'50px',
        display:'flex',
        backgroundColor:'pink',
    },

}

export default Escribir;