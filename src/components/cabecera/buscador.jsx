import React from "react";


class Buscadors extends React.Component{
    constructor(){
        super();
        this.state ={
            click : true
        };
        this.clickInput = this.clickInput.bind(this);
    }
    

    clickInput(){
        this.setState(prevState => ({
            click : !prevState.click
        }))
    }

    Inputs = ()=>{
        if(this.state.click === true){
            return (
            <input type='text' style={estiloBuscador.buscador} onClick = {this.clickInput} placeholder=" &#xF002; Busca"></input>
            )
        }
        else {
            return(
                <div style={estiloBuscador.divcancel}>
                <input type="text" style={estiloBuscador.buscador}  placeholder=' Busca'></input>
                <div style={estiloBuscador.divboton} onClick = {this.clickInput}>
                    <svg style={estiloBuscador.normal} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill=" #d0d3d4 "><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"/></svg>
                    </div>
            </div>)
        }
        
    }

    render(){
        return(
            <div>
                <this.Inputs/>
            </div>
            
        )
    }
}

function Buscador(){
    return(
        <div style={estiloBuscador.busca}>
            <Buscadors/>
        </div>
    )
}

const estiloBuscador = {
    busca:{
        width:'225px',
        height:'36px',
        backgroundColor:'white',
        marginRight:'1vw',
    },
    buscador:{
        width:'225px',
        height:'36px',
        border:'1px solid  #ecf0f1 ',
        borderRadius:'3px',
        backgroundColor:' #ecf0f1 ',
        fontFamily: 'FontAwesome, "Open Sans", Verdana, sans-serif',
        fontStyle: 'normal',
        fontWeight: 'normal',
        textDecoration: 'inherit',
    },
    divcancel:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        alingContent:'center',
    },
    divboton:{
        position:'fixed',
        display:'flex',
        alignItems:'flex-end',
        justifyContent:'flex-end',
        alingContent:'flex-end',
        paddingRight:'5px',
        cursor:'pointer',
        backgroundColor:'transparent',
    },
    normal:{
        backgroundColor:'transparent',
    }
    
}


export default Buscador;