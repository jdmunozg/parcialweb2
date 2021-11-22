import React from "react";
import logo from './img/logo.png';

function Imagen(){
    return(
        <img src={logo} alt="Imagen" style={normal.normalizacion}></img>
    )
}
const normal = {
    normalizacion:{
        backgroundColor:'white',
        cursor:'pointer',
    }
}
class Actualizar extends React.Component{
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
    
    estiloBotones(){
        if(this.state.width <= 1004){
            return {
                    width:'26vw',
                    height:'36px',
                    backgroundColor:'white',
                    display:'flex',
                    alignItems:'center',
                    alignContent:'center',
                    cursor:'pointer',
                }
        }
        else if(this.state.width >= 1004 && this.state.width <= 1100){
            return {
                width:'30vw',
                height:'36px',
                backgroundColor:'white',
                display:'flex',
                alignItems:'center',
                alignContent:'center',
                cursor:'pointer',
            }
        }
        else {
            return {
                width:'27vw',
                height:'36px',
                backgroundColor:'white',
                display:'flex',
                alignItems:'center',
                alignContent:'center',
                cursor:'pointer',
            }
        }
        
    }

    render(){
        return(
            <div style ={this.estiloBotones()}>
                <Imagen/>
            </div>
        )
    }
}

function BotonesIzq(){
    return(
    <div >
        <Actualizar/>
    </div>
    )
        
    
}



export default BotonesIzq;