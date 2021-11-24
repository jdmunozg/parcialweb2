import React from "react";
import Areareco from "./areaRecomendacion";

function Perfil(props){
    return(
        <div style={estiloP.perfil}>
            <div style={estiloP.imagen}>
                <img style={estiloP.img} src={props.imagen} alt='Imagen'></img>
            </div>
            <div  style={estiloP.nombre}>
                <div style={estiloP.nombreP}>
                    <p style={estiloP.superior}>juandavidmunozgaviria</p>
                    <p style={estiloP.inferior}>Juan David Muñoz Gaviria</p>
                </div>
            <div style={estiloP.cambiar}>
                <p style={estiloP.normal}>Cambiar</p>
            </div>
            </div>
            
        </div>
    )
}

const estiloP={
    perfil:{
        width:'100%',
        height:'80px',
        display:'flex',
        alignItems:'center',
    },
    imagen:{
        width:'7vw',
        height:'10vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    img:{
        width:'60px',
        height:'60px',
        borderRadius:'50%',
        cursor:'pointer'
    },
    nombre:{
        width:'100%',
        height:'10vh',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    nombreP:{
        width:'70%',
        height:'10vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    inferior:{
        fontFamily:"sans-serif",
        fontSize:'12px',
        color:' #979a9a ',
    },
    superior:{
        fontFamily:"sans-serif",
        fontSize:'13px',
        fontWeight: " bolder",
        cursor:'pointer',
    },
    cambiar:{
        width:'100%',
        height:'10vh',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        fontFamily:"sans-serif",
        cursor:'pointer',
        fontSize:'13px',
        color:' #5dade2 ',
    },
}

class Recomendacion extends React.Component{
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

    estiloRecomenda(){
        if(this.state.width >= 1000 && this.state.width <= 1053){
            return{
                position:'fixed',
                width:'210px',
                height:'300px',
                backgroundColor:'red',
                top:'13vh',
                right:'1vw',
                marginLeft:'10vw',
            }
        } else if(this.state.width >= 1053 && this.state.width <= 1200){
            return{
                position:'fixed',
                width:'280px',
                height:'300px',
                backgroundColor:'red',
                top:'13vh',
                right:'1vw',
                marginLeft:'10vw',
            }
        } else if(this.state.width >= 1200 && this.state.width <= 1300){
            return{
                position:'fixed',
                width:'300px',
                height:'300px',
                backgroundColor:'red',
                top:'13vh',
                right:'5vw',
                marginLeft:'10vw',
            }
        }
        else if(this.state.width >= 1301 && this.state.width <= 1440){
            return{
                position:'fixed',
                width:'300px',
                height:'300px',
                backgroundColor:'red',
                top:'13vh',
                right:'10vw',
                marginLeft:'10vw',
            }
        }
        else if(this.state.width >= 1441 ){
            return{
                position:'fixed',
                width:'300px',
                height:'300px',
                backgroundColor:'red',
                top:'100px',
                left:'900px',
                marginLeft:'10vw',
            }
        }
    }

    render(){
        return(
            <div style={this.estiloRecomenda()}>
                <Perfil imagen='https://picsum.photos/600/600'/>
                <Areareco/>
        </div>
        )
    }
}
function Recomiendo(){
    return(
        <Recomendacion/>
    )
}


export default Recomiendo;