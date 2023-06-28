import React from "react";
import {ValueType} from "../Rating/Rating";

type StarProps = {
    selected: boolean
    onClick: (value: ValueType) => void
    value: ValueType
}

export const Star = (props: StarProps) => {
    console.log("Star is rendering");

    return (
        <span onClick={()=>{props.onClick(props.value)}}>
            {props.selected ? <b>star</b> : "star"}
        </span>
    )
}