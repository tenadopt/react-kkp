import React from "react";

type StarProps = {
    selected: boolean
}

export const Star = (props: StarProps) => {
    console.log("Star is rendering");
    return (
    props.selected === true ? <span><b>star</b></span> : <span>star</span>
    )
}