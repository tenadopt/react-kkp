import React, {useState} from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type UncontrolledAccordionProps = {
    title: string
}

export const UncontrolledAccordion = (props: UncontrolledAccordionProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
        return (
            <div>
                {props.title}
                <div onClick={()=>setCollapsed(!collapsed)}><AccordionTitle title={props.title}/>
                {collapsed && <AccordionBody/>}
                </div>
            </div>
        )
    }