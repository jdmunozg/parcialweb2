import React from "react";
import BotonesIzq from "./botonesiq";
import Buscador from "./buscador";
import BotonesDer from "./botonesder";

class Cocabecera extends React.Component{
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
        if(this.state.width <= 1004){
            return {
                    width:'97vw',
                    height:'100%',
                    backgroundColor:'white',
                    display:'flex',
                    flexDirection:'row',
                    alignItems:'center',
                    alignContent:'center',
                    justifyContent:'center',
            }
        }
        else if(this.state.width >= 1004 && this.state.width <= 1100){
            return {
                width:'85vw',
                height:'100%',
                backgroundColor:'white',
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                alignContent:'center',
                justifyContent:'center',
            }
        }
        else if(this.state.width >= 1101 && this.state.width <= 1900){
            return {

                    width:'68vw',
                    height:'100%',
                    backgroundColor:'white',
                    display:'flex',
                    flexDirection:'row',
                    alignItems:'center',
                    alignContent:'center',
                    justifyContent:'center',
                    
            }
        }
        else if(this.state.width >= 1900){
            return {

                    width:'1300px',
                    height:'100%',
                    backgroundColor:'white',
                    display:'flex',
                    flexDirection:'row',
                    alignItems:'center',
                    alignContent:'flex-start',
                    justifyContent:'flex-start',
                    
            }
        }
        
    }

    render(){
        return(
            <div style ={this.estiloCabecera()}>
                <BotonesIzq/>
                <Buscador/>
                <BotonesDer/>
            </div>
        )
    }
}

function Header(){
    return(
        <header style={estiloHeader.cabecera}>
                <Cocabecera/>
                
        </header>
    );
}


const estiloHeader ={
    cabecera:{
        width:'100%',
        height:'54px',
        backgroundColor:'white',
        display:'flex',
        justifyContent:'center',
        borderBottom:'1px solid  #ecf0f1 ',
        position:'fixed',
        top:'0',
        zIndex:'1',
    },
}

export default Header;