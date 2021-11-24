import React from "react";
import Circule from "./circulePin";


class Historia extends React.Component{
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
    
    estiloHistoria(){
        if(this.state.width <= 688){
            return {
                width:'97vw',
                height:'100px',
                marginLeft:'0vw',
                marginRight:'0vw',
                marginTop:'13vh',
                backgroundColor:'white',
                transition: 'all 1s ease-out',
            }
        }
        else if(this.state.width >= 623 && this.state.width <= 1000){
            return {
                width:'520px',
                height:'100px',
                marginLeft:'22vw',
                marginRight:'1vw',
                marginTop:'72px',
                backgroundColor:'white',
                transition: 'all 1s ease-out',
            }
        }
        else if(this.state.width >= 1001 && this.state.width <= 1440){
            return {
                width:'600px',
                height:'100px',
                marginLeft:'12vw',
                marginRight:'1vw',
                marginTop:'72px',
                backgroundColor:'white',
                transition: 'all 1s ease-out',
            }
        }
        else if(this.state.width >= 1441 && this.state.width <= 2200){
            return {
                width:'600px',
                height:'100px',
                marginLeft:'400px',
                marginRight:'1vw',
                marginTop:'72px',
                backgroundColor:'white',
                transition: 'all 1s ease-out',
            }
        }
        else{
            return {
                width:'600px',
                height:'100px',
                marginLeft:'650px',
                marginRight:'1vw',
                marginTop:'72px',
                backgroundColor:'white',
                transition: 'all 1s ease-out',
            }
        }
        
    }
    render(){
        return(
            <div style={this.estiloHistoria()}>
                <CirculosHistoria/>
        </div>
        )
    }
}

class CirculosHistoria extends React.Component{
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

    

    estilocirculo(){
        if(this.state.width <= 688){
            return {
                width:'97vw',
                height:'30px',
                display:'flex',
                flexDirection:'row',
                alignContent:'center',
                alignItems:'center',
                border: 'solid 1px #ccc',
                padding:'40px 0',
                backgroundColor:'white',
                marginBottom:'2vh',
                overflow: 'hidden',
                overflowY: 'hidden',
                borderLeft:'0',
                borderRight:'0',
                transition: 'all 1s ease-out',
                
            }
        }
        else if(this.state.width >= 623 && this.state.width <= 1000){
            return {
                width:'520px',
                height:'30px',
                display:'flex',
                flexDirection:'row',
                alignContent:'center',
                alignItems:'center',
                border: 'solid 1px #ccc',
                padding:'40px 0',
                backgroundColor:'white',
                overflow: 'hidden',
                overflowY: 'hidden',
                borderLeft:'0',
                borderRight:'0',
                transition: 'all 1s ease-out',
                
            }
        }
        else if(this.state.width >= 1001 && this.state.width <= 1440){
            return {
                width:'600px',
                height:'30px',
                display:'flex',
                flexDirection:'row',
                alignContent:'center',
                alignItems:'center',
                border: 'solid 1px #ccc',
                borderLeft:'0',
                borderRight:'0',
                borderRadius:'3px',
                padding:'40px 0',
                backgroundColor:'white',
                overflow: 'hidden',
                overflowY: 'hidden',
                transition: 'all 1s ease-out',
                
            }
        }
        else if(this.state.width >= 1441 && this.state.width <= 2200){
            return {
                width:'600px',
                height:'30px',
                display:'flex',
                flexDirection:'row',
                alignContent:'center',
                alignItems:'center',
                border: 'solid 1px #ccc',
                borderRadius:'3px',
                padding:'40px 0',
                backgroundColor:'white',
                overflow: 'hidden',
                overflowY: 'hidden',
                borderLeft:'0',
                borderRight:'0',
                transition: 'all 1s ease-out',
                
            }
        }
        else{
            return {
                width:'600px',
                height:'30px',
                display:'flex',
                flexDirection:'row',
                alignContent:'center',
                alignItems:'center',
                border: 'solid 1px #ccc',
                borderRadius:'3px',
                padding:'40px 0',
                backgroundColor:'white',
                overflow: 'hidden',
                overflowY: 'hidden',
                borderLeft:'0',
                borderRight:'0',
                transition: 'all 1s ease-out',
                
            }
        }
    }

    render(){
        return(
            <div  style={this.estilocirculo()}>
                <div>
                    <button style={estiloBoton.botones} onClick={ function () {
                    document.getElementById('idd').scrollLeft -= 80;
                }}> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg></button>
                </div>
                <div id="idd" style={this.estilocirculo()}>
                    <Circule title ='jdmunozg' image = 'https://picsum.photos/199/200'/>
                    <Circule title ='mpvesgap' image = 'https://picsum.photos/200/199'/>
                    <Circule title ='nsalazarv' image = 'https://picsum.photos/180/200'/>
                    <Circule title ='yamunozg' image = 'https://picsum.photos/200/180'/>
                    <Circule title ='aygaviriar' image = 'https://picsum.photos/170/200'/>
                    <Circule title ='aygaviriar' image = 'https://picsum.photos/170/200'/>
                    <Circule title ='aygaviriar' image = 'https://picsum.photos/170/200'/>
                    <Circule title ='aygaviriar' image = 'https://picsum.photos/170/200'/>
                    <Circule title ='aygaviriar' image = 'https://picsum.photos/170/200'/>
                    <Circule title ='aygaviriar' image = 'https://picsum.photos/170/200'/>
                </div>
                    
                <div style={estiloBoton.divDos}>
                    <button style={estiloBoton.bont} onClick={ function () {
                    document.getElementById('idd').scrollLeft += 80;
                }}> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg></button>
                </div>
            </div>
        )
    }
    
}



function Histori(){
    return(
        <Historia/>
    )
}

const estiloBoton={
    botones:{
        width:'25px',
        height:'25px',
        border:'0',
        backgroundColor:'white',
        transition: 'all 1s ease-out',
        cursor:'pointer',
    },
    bont:{
        width:'25px',
        height:'25px',
        border:'0',
        backgroundColor:'white',
        transition: 'all 1s ease-out',
        cursor:'pointer',
    },
    divUno:{
        borderRight:'0',
        border:'0',
        transition: 'all 1s ease-out',
    },
    divDos:{
        border:'0',
        display:'flex',
        alignItems:'center',
        transition: 'all 1s ease-out',
    }
}

export default Histori;