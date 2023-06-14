import React from "react";
import {Star} from "../Star/Star";

type RatingProps = {
    value: number
}

export const Rating = (props: RatingProps) => {
    console.log("Rating rendering");
    return <>
            <Star selected={props.value>0}/>
            <Star selected={props.value>1}/>
            <Star selected={props.value>2}/>
            <Star selected={props.value>3}/>
            <Star selected={props.value>4}/>
        </>
}