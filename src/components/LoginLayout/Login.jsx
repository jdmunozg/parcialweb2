import React from 'react';
import BodyLogin from './BodyLayout/BodyLogin'
import FooterLogin from './Footer/FooterLogin';
const Login = () => {
    return (
        <div style={estilo.estilo}>
            <BodyLogin style={estilo.estilo}/>
            <FooterLogin style={estilo.estilo}/>            
        </div>
    );
};

const estilo={
    estilo:{
        backgroundColor:'white',
    }
}

export default Login;