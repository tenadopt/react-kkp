import {Meta, StoryObj} from "@storybook/react";
import {Onoff} from "../Onoff/Onoff";
import {Accordion, AccordionProps} from "./Accordion";
import React, {useState} from "react";
import {OnoffChanged} from "../Onoff/Onoff.stories";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
}



export default meta;

type Story = StoryObj<typeof Accordion>;

export const CollapesedChangeMode: Story = {
    args: {
        title: 'Menu',
        collapsed: false,
    },
};

export const UncollapsedChangeMode: Story = {
    args: {
        title: 'User',
        collapsed: true,
    },
};
