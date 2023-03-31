import React from 'react';

const Title = (props) =>{

    const titleStyle = {
        fontFamily: "sans-serif",
        fontWeight: "bold",
        fontSize: "large"
    }
    return(
        <div style={titleStyle}>
            {props.title}
        </div>
    );
}

export default Title;