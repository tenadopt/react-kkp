import React, {useState} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export type AccordionProps = {
    title: string
    collapsed: boolean
    onChange: () => void
}

export const Accordion = (props: AccordionProps) => {
    const [value, setValue] = useState(true)
    const handleronChange = () => {
        setValue(!value)
    }
    <div>
        {props.title}
        <AccordionTitle title={props.title}/>
        {props.collapsed && <AccordionBody/>}
        onChange={handleronChange}
    </div>
)
}
