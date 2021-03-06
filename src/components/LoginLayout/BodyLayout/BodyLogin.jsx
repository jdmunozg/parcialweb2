import React from 'react';
import imagen from '../../../phones.PNG'
import letter from '../../../letrero.PNG'
import icon from '../../../anonymous-person.jpg'
import { firebase } from '../../../firebase-config';
import {signInWithPopup,getAuth} from 'firebase/auth';
import 'firebase/compat/auth';

const styles = {
    general:{
        width:'100vw',
        height:'100vh',
        backgroundColor:'#FAFAFA',
        display:'flex',
        flexFlow:'row nowrap',
        justifyContent:'center'
    },
    box_content:{
        width:'60vw',
        height:'100%',
        backgroundColor:'#FAFAFA',
        display:'flex',
        flexFlow:'colum',
        justifyContent:'space-around',
        alignItems:'center'
    },
    box_register:{
        width:'25vw',
        height:'50vh',
        backgroundColor:'white',
        border:'1px solid #DBDBDB'
    },
    box_img:{
        width:'50%',
        height:'90%',
        backgroundColor:'#FAFAFA',
    },
    letters:{
        width:'100%',
        height:'30%',
        backgroundColor:'white',
        display:'flex',
        flexFlow:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    cellphones:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
    },
    bodyRegister:{
        width:'100%',
        height:'40%',
        backgroundColor:'white',
        display:'flex',
        flexFlow:'column',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    icon:{
        width:'7vw',
        height:'14vh',
        borderRadius:'50%',
        backgroundColor:'white',
        display:'flex',
        alignSelf:'center'
    },
    signIn:{
        backgroundColor:'#0095F6',
        border:'none',
        borderRadius:'5px',
        width:'60%',
        height:'20%',
        color:'white'
    },
    img:{
        width:'100%',
        height:'100%',
        borderRadius:'50%',
    }
}

const signIn = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    signInWithPopup(getAuth(),provider).then((re)=>{
        console.log(re);
    }).catch((err)=>{
        console.log(err);
    })
}

const BodyLogin = () => {
    return (
        <div style={styles.general}>
            <div style={styles.box_content}>
                <div style={styles.box_img}>
                    <img style={styles.cellphones} src={imagen} alt="no hay nada" />
                </div>
                <div style={styles.box_register}>
                    <div style={styles.letters}>
                        <img src={letter} alt="" />
                    </div>
                    <div style={styles.bodyRegister}>
                        <div style={styles.icon}>
                            <img style={styles.img} src={icon} alt="no hay nada" />
                        </div>
                        <button style={styles.signIn} onClick={signIn} >SignIn With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BodyLogin;