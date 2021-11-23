import React from 'react';
import ButtonFooter from './ButtonFooter/ButtonFooter';

const styles={
    general:{
        width:'100vw',
        height:'15vh',
        backgroundColor:'#FAFAFA',
        display:'flex',
        flexFlow:'column',
        alignItems:'flex-start',
    },
    firstRow:{
        width:'800px',
        height:'30px',
        backgroundColor:'transparent',
        display:'flex',
        flexFlow:'row nowrap',
        justifyContent:'space-evenly',
        alignSelf:'center'
        
    },
    secondRow:{
        width:'500px',
        height:'30px',
        backgroundColor:'transparent',
        display:'flex',
        flexFlow:'row nowrap',
        justifyContent:' space-evenly ',
        alignSelf:'center'
    },
    thirdRow:{
        width:'220px',
        height:'30px',
        backgroundColor:'transparent',
        display:'flex',
        flexFlow:'row nowrap',
        justifyContent:'space-around',
        alignSelf:'center',
        padding:'5px 0px 0px 0px'
    }
}

const FooterLogin = () => {
    return (
        <div style={styles.general}>
            <div style={styles.firstRow}>
                <ButtonFooter text="Meta"/>
                <ButtonFooter text="Información"/>
                <ButtonFooter text="Blog"/>
                <ButtonFooter text="Empleo"/>
                <ButtonFooter text="Ayuda"/>
                <ButtonFooter text="API"/>
                <ButtonFooter text="Privacidad"/>
                <ButtonFooter text="Condiciones"/>
                <ButtonFooter text="Cuentas destacadas"/>
                <ButtonFooter text="Hashtags"/>
                <ButtonFooter text="Ubicaciones"/>
                <ButtonFooter text="Instagram Lite"/>
            </div>
            <div style={styles.secondRow}>
                <ButtonFooter text="Belleza"/>
                <ButtonFooter text="Danzas"/>
                <ButtonFooter text="Fitness"/>
                <ButtonFooter text="Comida y bebida"/>
                <ButtonFooter text="Casa y jardín"/>
                <ButtonFooter text="Música"/>
                <ButtonFooter text="Artes visuales"/>

            </div>
            <div style={styles.thirdRow}>
                <ButtonFooter text="Español"/>
                <ButtonFooter text="© 2021 Instagram from Meta"/>

            </div>
        </div>
    );
};

export default FooterLogin;