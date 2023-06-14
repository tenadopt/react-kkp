import React from "react";

type StarProps = {
    selected: boolean
    setValue: (value: number) => void
    value: number
}

export const Star = (props: StarProps) => {
    console.log("Star is rendering");

    return (
        <span onClick={()=>{props.setValue(props.value)}}>
            {props.selected === true ? <b>star</b> : "star"}
        </span>
    )
}