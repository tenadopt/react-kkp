import React from "react";
import {Star} from "../Star/Star";

type RatingProps = {
    value: number
}

export const Rating = (props: RatingProps) => {
    console.log("Rating rendering");
    if (props.value==1) {return <>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </>}
    if (props.value==2) {return <>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
    </>}
    if (props.value==3) {return <>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
    </>}
    if (props.value==4) {return <>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
    </>}
    if (props.value==5) {return <>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
    </>}
    return <>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
    </>
}