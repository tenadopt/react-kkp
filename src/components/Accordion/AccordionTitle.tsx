import React from "react";

type AccordionTitleType = {
    title: string
}

export const AccordionTitle = (props: AccordionTitleType) => {
    debugger
    console.log("AccordionTitle rendering");
    return (
        <h3>{props.title}</h3>
    )
}