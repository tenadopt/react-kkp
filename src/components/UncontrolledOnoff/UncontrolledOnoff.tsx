import React, {useState} from 'react';

export const UncontrolledOnoff = () => {

    const [switched, setSwitched]=useState(false)

    const onStyle = {
        backgroundColor: switched ? "green" : "white"
    }
    const offStyle = {
        backgroundColor: switched ? "white" : "red"
    }
    const lightStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "15px",
        border: "1px solid black",
        backgroundColor: switched ? "green" : "red"
    }
    return (
        <div>
            <button style={onStyle} onClick={()=>{setSwitched(true)}}>ON</button>
            <button style={offStyle} onClick={()=>{setSwitched(false)}}>OFF</button>
            <button  style={lightStyle}></button>
        </div>
    );
};