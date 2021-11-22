import React from "react";


class TituloC extends React.Component{
    constructor(props) {
        super(props);
        this.state = { click: true};
        this.hoverSta = this.hoverSta.bind(this);
    }

    hoverSta(){
        this.setState(prevState => ({
            click : !prevState.click
        }))
    }

    titulo(){
            return{
                width:'480px',
                height:'100%',
                //backgroundColor:'red',
                marginLeft:'0.3vw',
                display:'flex',
                alignItems:'center',
                alignContent:'center',
                justifyContent:'flex-start',
                fontFamily:"sans-serif",
                fontWeight: " bolder",
                fontSize:'15px',
                backgroundColor:'white',
        }
    }

    tituloDos(){
        if(this.state.click){
            return{
                backgroundColor:'white',
            }
        }
        else{
            return{
                textDecoration: 'underline',
                backgroundColor:'white',
                cursor:'pointer',
            }
        }
    }
    render(){
        return(
            <div style={this.titulo()}>
                <p style={this.tituloDos()}  onMouseLeave = {this.hoverSta}  onMouseEnter = {this.hoverSta}>{this.props.titulo}</p>
            </div>
        )
    }
}

function Icono(){
    return(
        <div style={estiloImgen.estiloIcono}>
            <svg aria-label="Más opciones"  style={estiloImgen.normal} class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6.5" cy="12" r="1.5"></circle><circle cx="17.5" cy="12" r="1.5"></circle></svg>
        </div>
    )
}

function ImagenPerfil(props){
    return(
        <div style={props.estado ? estiloImgen.contenedor: estiloImgen.contenedorAlt}>
            <img src={props.imagen} style={props.estado ?estiloImgen.imagen : estiloImgen.imagenalt} alt = "Imagen"></img>
        </div>
    )
}

const estiloImgen={
    contenedor:{
        width:'50px',
        height:'50px',
        backgroundColor:'white',
        display:'flex',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        background:'linear-gradient(36deg, rgb(255,201,0) 13%, rgb(255,0,95) 73%, rgb(255,9,237) 100%)',
        boxSizing:'border-box',
        borderRadius:'50%',
        marginLeft:'1vw',
    },
    imagen:{
        width:'42px',
        height:'42px',
        borderRadius:'50%',
        padding:'0',
        margin:'0',
        border:'solid 2px #fff',
        backgroundColor:'white',
        cursor:'pointer',
    },
    contenedorAlt:{
        width:'50px',
        height:'50px',
        display:'flex',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        borderRadius:'50%',
        marginLeft:'1vw',
        backgroundColor:'white',
    },
    imagenalt:{
        width:'48px',
        height:'48px',
        borderRadius:'50%',
        padding:'0',
        margin:'0',
        border:'solid 2px #fff',
        backgroundColor:'white',
        cursor:'pointer',
    },
    estiloIcono:{
        width:'50px',
        height:'50px',
        //backgroundColor:'yellow',
        display:'flex',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        cursor:'pointer',
        backgroundColor:'white',
    },
    normal:{
        backgroundColor:'white',
    }



}

class Cabe extends React.Component{
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    estiloCabecera(){
        if(this.state.width <= 688){
            return {
                width:'97vw',
                height:'65px',
                //backgroundColor:'green',
                display:'flex',
                alignItems:'center',
                alignContent:'centar',
                border:'1px solid #ecf0f1 ',
                backgroundColor:'white',
            }
        }
        else if(this.state.width >= 623 && this.state.width <= 1000){
            return {
                width:'520px',
                height:'65px',
                //backgroundColor:'green',
                display:'flex',
                alignItems:'center',
                alignContent:'centar',
                border:'1px solid #ecf0f1 ',
                backgroundColor:'white',
                
            }
        }
        else {
            return {
            width:'600px',
            height:'65px',
            //backgroundColor:'green',
            display:'flex',
            alignItems:'center',
            alignContent:'centar',
            border:'1px solid #ecf0f1 ',
            backgroundColor:'white',
            
            }
        }
    }
            
    render(){
            return(
                <div style={this.estiloCabecera()}>
                    <ImagenPerfil imagen={this.props.imagen} estado={this.props.estado}/>
                    <TituloC titulo={this.props.titulo}/>
                    <Icono/>
                </div>
            )
        }
        
    
}


function Cabecera(props){
    return(
        <Cabe imagen={props.imagen} estado={props.estado} titulo={props.titulo}/>
        
    )

}

export default Cabecera;



