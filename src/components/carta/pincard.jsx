import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Cabecera from "./cabecera";
import Footer from "./footer";

function Imagen (props){
    return(
        <div style={estiloImg.imgen}>
            <img src={props.imagen} style={estiloImg.imgw} alt='Falta'>
            </img>
        </div>
    )
}

const estiloImg={
    imgen:{
        width:'100%',
        height:'600px',
        //backgroundColor:'green',
    },
    imgw:{
        width:'100%',
        height:'600PX',
    }
}


class Pincards extends React.Component{
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

    estiloPincard(){
        if(this.state.width <= 688){
            return {
                width:'97vw',
                height:'880px',
                marginLeft:'0vw',
                marginRight:'0vw',
                marginTop:'1.5vh',
                border:'1px solid #ecf0f1',
            }
        }
        else if(this.state.width >= 623 && this.state.width <= 1000){
            return {
                width:'520px',
                height:'880px',
                marginLeft:'22vw',
                marginRight:'1vw',
                marginTop:'4vh',
                border:'1px solid #ecf0f1',
            }
        }
        else {
            return {
            width:'600px',
            height:'880px',
            marginLeft:'15vw',
            marginRight:'1vw',
            marginTop:'2vh',
            marginBottom:'2vh',
            border:'1px solid #ecf0f1',
            }
        }
    }
            
    render(){
            return(
                <div style={this.estiloPincard()}>
                    <Cabecera imagen={this.props.imagen} estado={this.props.estado} titulo={this.props.titulo}/>
                    <Imagen imagen={this.props.imagenD}/>
                    <Footer/>
                </div>
            )
        }
        
    
}

function Pincard(){
    return(
        <Fragment>
            <Pincards imagen='https://picsum.photos/200/200' estado={true} titulo="QueBoleta" imagenD="https://picsum.photos/600/600"/>
            <Pincards imagen='https://picsum.photos/200/200' estado={false} titulo="jdmunozg" imagenD="https://picsum.photos/599/599"/>
            <Pincards imagen='https://picsum.photos/200/200' estado={true} titulo="nsalazarv" imagenD="https://picsum.photos/598/600"/>
            <Pincards imagen='https://picsum.photos/200/200' estado={true} titulo="nicosalaz" imagenD="https://picsum.photos/598/600"/>
            <Pincards imagen='https://picsum.photos/200/200' estado={true} titulo="marvic" imagenD="https://picsum.photos/598/600"/>
            <Pincards imagen='https://picsum.photos/200/200' estado={true} titulo="arosasc" imagenD="https://picsum.photos/598/600"/>
            <Pincards imagen='https://picsum.photos/200/200' estado={true} titulo="ccarabalic" imagenD="https://picsum.photos/598/600"/>
        </Fragment>
        
    )
}

export default Pincard;