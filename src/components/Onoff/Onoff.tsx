import React, {useState} from 'react';

type OnoffType = {
    switched: boolean
    onChange: (switched: boolean)=> void
}

export const Onoff = (props: OnoffType) => {

    const onStyle = {
        backgroundColor: props.switched ? "green" : "white"
    }
    const offStyle = {
        backgroundColor: props.switched ? "white" : "red"
    }
    const lightStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "15px",
        border: "1px solid black",
        backgroundColor: props.switched ? "green" : "red"
    }
    return (
        <div>
            <button style={onStyle} onClick={()=>{props.onChange(true)}}>ON</button>
            <button style={offStyle} onClick={()=>{props.onChange(false)}}>OFF</button>
            <button  style={lightStyle}></button>
        </div>
    );
};