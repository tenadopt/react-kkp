import React from "react";
import {Star} from "../Star/Star";

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5;


type RatingPropsType = {
    value: ValueType
    onClick: () => void
}

export const Rating = (props: RatingPropsType) => {
    console.log("Rating rendering");
    return <>
        <Star selected={props.value>0} value={1} onClick={props.onClick}/>
        <Star selected={props.value>1} value={2} onClick={props.onClick}/>
        <Star selected={props.value>2} value={3} onClick={props.onClick}/>
        <Star selected={props.value>3} value={4} onClick={props.onClick}/>
        <Star selected={props.value>4} value={5} onClick={props.onClick}/>
    </>
}