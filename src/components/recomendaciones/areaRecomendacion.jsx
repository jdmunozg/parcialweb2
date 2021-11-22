import React from "react";

function Sugerencias(){
    return(
        <div style={estiloArea.sugerencia}>
            <p style={estiloArea.paraTi}>Sugerencias para ti</p>
            <p style={estiloArea.verT}>Ver todo</p>
        </div>
    )
}

function Descripcion(){
    return(
        <div style={estiloP.des}>
            <p style={estiloP.normal}>Información  Ayuda  Prensa  API  Empleo  Privacidad  Condiciones  Ubicaciones  Cuentas  destacadas  Hashtags  Idioma</p>
            <p>©  2021  Instagram  from  Meta</p>
        </div>
    )
}

class Reco extends React.Component{
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


    estiloReco(){
        return{
            width:'100%',
            height:'60px',
            backgroundColor:'purple',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            alignContent:'center',
            marginTop:'2vh',
            marginBottom:'2vh',
        }
    }

    estiloTito(){
        if(this.state.click){
            return{
            fontFamily:"sans-serif",
            fontSize:'13px',
            fontWeight: " bolder",
            cursor:'pointer',
                //backgroundColor:'white',
            }
        }
        else{
            return{
                fontFamily:"sans-serif",
                fontSize:'13px',
                fontWeight: " bolder",
                textDecoration: 'underline',
                //backgroundColor:'white',
                cursor:'pointer',
            }
        }
    }
    
    render(){
        return(
            <div style={this.estiloReco()}>
                <div style={estiloP.imagen}>
                    <img style={estiloP.img} src={this.props.imagen} alt='Imagen'></img>
                </div>
            <div  style={estiloP.nombre}>
                <div style={estiloP.nombreP}>
                    <p style={this.estiloTito()} onMouseLeave = {this.hoverSta}  onMouseEnter = {this.hoverSta}>{this.props.title}</p>
                    <p style={estiloP.inferior}>{this.props.nom}</p>
                </div>
                <div style={estiloP.cambiar}>
                    <p style={estiloP.normal}>Seguir</p>
                </div>
            </div>
            </div>
        )
    }
}
const estiloP={
    imagen:{
        width:'6vw',
        height:'100%',
       // backgroundColor:'white',
        display:'flex',
        //flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    img:{
        width:'50px',
        height:'50px',
        borderRadius:'50%',
        cursor:'pointer'
    }, nombre:{
        width:'100%',
        height:'100%',
       // backgroundColor:'white',
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
        //backgroundColor:'white',
    },
    inferior:{
        fontFamily:"sans-serif",
        fontSize:'12px',
        color:' #979a9a ',
       // backgroundColor:'white',
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
        //backgroundColor:'white',
    },
    des:{
        fontFamily:"sans-serif",
        fontSize:'12px',
        color:' #979a9a ',
    },normal:{
        cursor:'pointer',
    }
};
function Areareco(){
    return(
        <div style={estiloArea.area}>
            <Sugerencias/>
            <Reco imagen='https://picsum.photos/601/600' title='YohanMunoz' nom='Te Sigue'/>
            <Reco imagen='https://picsum.photos/600/599' title='YanethG' nom='jdmunoz'/>
            <Reco imagen='https://picsum.photos/600/400' title='Calidad' nom='Te sigue'/>
            <Reco imagen='https://picsum.photos/499/600' title='Hover' nom='Te sigue'/>
            <Descripcion/>
        </div>
    )

}

const estiloArea={
    area:{
        width:'100%',
        height:'100%',
        //backgroundColor:'pink',
    },
    sugerencia:{
        width:'100%',
        height:'30px',
        //backgroundColor:'blue',
        fontFamily:"sans-serif",
        display:'flex',
        
    },
    paraTi:{
        color:' #979a9a ',
        fontWeight: " bolder",
        width:'70%',
        fontSize:'78%',
    },
    verT:{
        marginLeft:'130px',
        cursor:'pointer',
        width:'30%',
        fontSize:'78%',
    }
}

export default Areareco;