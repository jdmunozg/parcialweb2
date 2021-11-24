import React from "react";

function Megusta (){
    return(
        <div style={estiloComments.estiloMegusta}>
            <p style={estiloComments.normal}>26,863 Me gusta</p>
        </div>
    )
}

function Complemento(){
    return(
        <div style={estiloComments.contenedorP}>
            <p style={estiloComments.verComent}>Ver los 467 comentarios</p>
            <p style={estiloComments.fecha}>5 DE OCTUBRE 1999</p>
        </div>
    )
}

class Comentarios extends React.Component{
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

    estiloComent(){
        return{
            display:'flex',
            flexDirection:'row',
            fontFamily:"sans-serif",
            marginTop:'5px',
            marginLeft:'20px',
            backgroundColor:'white',
        }
    }
    estiloTitu(){
        if(this.state.click){
            return{
                marginRight:'5px',
                fontWeight: " bolder",
                fontSize:'16px',
                display:'flex',
                alignItems:'center',
                backgroundColor:'white',
            }
        }
        else{
            return{
                marginRight:'5px',
                fontWeight: " bolder",
                fontSize:'16px',
                display:'flex',
                alignItems:'center',
                textDecoration: 'underline',
                backgroundColor:'white',
                cursor:'pointer',
            }
        }
        
    }
    estiloCommen(){
        return{
            fontSize:'14px',
            display:'flex',
            alignItems:'center',
            backgroundColor:'white',
        }
    }
    estiloMas(){
        return{
            color:'#8e8e8e',
            margin:'3px',
            cursor:'pointer',
            backgroundColor:'white',
            
        }
    }

    render(){
        return(
            <div style={this.estiloComent()}>
                <div style={this.estiloTitu()} onMouseLeave = {this.hoverSta}  onMouseEnter = {this.hoverSta}>
                    <p style={estiloComments.normalizacion}>jdmunozg</p>
                </div>
                <div style={this.estiloCommen()}>
                    <p style={estiloComments.normalizacion}> Muy chula esa imagen... </p><p style={this.estiloMas()}>más</p>
                </div>
            </div>
        )
    }
}

function Commentarios (){
    return(
        <div style={estiloComments.estiloUno}>
            <Megusta/>
            <Comentarios/>
            <Complemento/>
        </div>
        
    )
}

const estiloComments={
    estiloUno:{
        width:'100%',
        height:'115px',
        display:'flex',
        flexDirection:'column',
        backgroundColor:'white',
    },
    estiloMegusta:{
        height:'20px',
        backgroundColor:'white',
        marginTop:'10px',
        marginLeft:'20px',
        fontFamily:"sans-serif",
        fontWeight: " bolder",
        fontSize:'16px',
        display:'flex',
    },
    normal:{
        backgroundColor:'white',
        cursor:'pointer',
        width:'150px',
    },
    normalizacion:{
        backgroundColor:'white',
    },
    verComent:{
        fontSize:'14px',
        backgroundColor:'white',
        cursor:'pointer',
    },
    fecha:{
        
        fontSize:'12px',
        marginTop:'5px',
        backgroundColor:'white',
        cursor:'pointer',
    },
    contenedorP:{
        marginTop:'5px',
        marginLeft:'20px',
        fontFamily:"sans-serif",
        color:'#8e8e8e',
        backgroundColor:'white',
    }
}

export default Commentarios;