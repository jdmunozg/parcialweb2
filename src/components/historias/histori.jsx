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
            }
        }
        else if(this.state.width >= 623 && this.state.width <= 1000){
            return {
                width:'520px',
                height:'100px',
                marginLeft:'22vw',
                marginRight:'1vw',
                marginTop:'72px',
            }
        }
        else if(this.state.width >= 1001 && this.state.width <= 1440){
            return {
                width:'600px',
                height:'100px',
                marginLeft:'12vw',
                marginRight:'1vw',
                marginTop:'72px',
            }
        }
        else if(this.state.width >= 1441 ){
            return {
                width:'600px',
                height:'100px',
                marginLeft:'650px',
                marginRight:'1vw',
                marginTop:'72px',
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
                overflow: 'scroll',
                overflowY:'hidden',
                marginBottom:'2vh',
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
                overflow: 'scroll',
                overflowY:'hidden',
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
                borderRadius:'3px',
                padding:'40px 0',
                backgroundColor:'white',
                overflow: 'scroll',
                overflowY:'hidden',
            }
        }
        else if(this.state.width >= 1441 ){
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
                overflow: 'scroll',
                overflowY:'hidden',
            }
        }
    }

    render(){
        return(
            <div style={this.estilocirculo()}>
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
        )
    }
    
}




function Histori(){
    return(
        <Historia/>
    )
}


export default Histori;