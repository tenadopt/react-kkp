import React, {useState} from 'react';

type UncontrolledOnoffType = {
    onChange: (switched: boolean) => void
}

export const UncontrolledOnoff = (props: UncontrolledOnoffType) => {
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
    const onClickOn = () => {
        setSwitched(true)
            props.onChange(true)
    }
    const onClickOff = () => {
        setSwitched(false)
        props.onChange(false)
    }
    return (
        <div>
            <button style={onStyle} onClick={onClickOn}>ON</button>
            <button style={offStyle} onClick={onClickOff}>OFF</button>
            <button  style={lightStyle}></button>
        </div>
    );
};