import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionProps = {
    title: string
    collapsed: boolean
}

export const Accordion = (props: AccordionProps) => {
    return (
        <div>
            {props.title}
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}
