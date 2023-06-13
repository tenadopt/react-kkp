import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionProps = {
    title: string
}

export const Accordion = (props: AccordionProps) => {
    debugger
    console.log("Accordion rendering");
    return (
        <div>
            {props.title}
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    )
}