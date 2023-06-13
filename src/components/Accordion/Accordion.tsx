import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionProps = {
    title: string
    collapsed: boolean
}

export const Accordion = (props: AccordionProps) => {
    console.log("Accordion rendering");
    if (props.collapsed === true) {
        return (
            <div>
                {props.title}
                <AccordionTitle title={props.title}/>
                <AccordionBody/>
            </div>
        )
    } else {
        return (
            <div>
                {props.title}
                <AccordionTitle title={props.title}/>

            </div>
        )}
}