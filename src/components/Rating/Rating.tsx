import React from "react";
import {Star} from "../Star/Star";


export type ValueType = 0 | 1 | 2 | 3 | 4 | 5;


export type RatingPropsType = {
    value: ValueType
    onClick: (value: ValueType) => void
}

export const Rating = (props: RatingPropsType) => {
    console.log("Rating rendering");
    const handleClick = (value: ValueType) => {
        props.onClick(value)
    }
    return <>
        <Star selected={props.value > 0} value={1} onClick={() => handleClick(1)}/>
        <Star selected={props.value > 1} value={2} onClick={() => handleClick(2)}/>
        <Star selected={props.value > 2} value={3} onClick={() => handleClick(3)}/>
        <Star selected={props.value > 3} value={4} onClick={() => handleClick(4)}/>
        <Star selected={props.value > 4} value={5} onClick={() => handleClick(5)}/>
    </>;
}