import React from 'react';

const styles={
    link:{
        textDecoration: 'none',
        fontSize:'12px',
        color:'#8E8E8E'
    },
}

const ButtonFooter = (props) => {
    return (
        <div >
            <a style={styles.link} href="https://www.w3schools.com/css/css_link.asp">{props.text}</a>
        </div>
    );
};

export default ButtonFooter;