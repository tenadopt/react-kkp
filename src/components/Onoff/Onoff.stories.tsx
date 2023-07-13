import type {Meta, StoryObj} from '@storybook/react';
import React, {ComponentProps, useState} from "react";
import {Onoff, OnoffType} from './Onoff';
import {Rating, ValueType} from "../Rating/Rating";

const meta: Meta<typeof Onoff> = {
    component: Onoff,
}

export default meta;

type Story = StoryObj<typeof Onoff>;

export const OnChangeMode: Story = {
    args: {
        switched: true,
        onChange: (x: boolean) => x,
    },
};

export const OffChangeMode: Story = {
    args: {
        switched: false,
        onChange: (x: boolean) => x,
    },
};

export const OnoffChanged = () => {
    const [switched, setSwitched] = useState(true);
    const handleOnoffChanged = (value: boolean) => {
        setSwitched(value)
    };
    return <Onoff switched={switched} onClick={handleOnoffChanged} />;
};

export const Hooks: Story = {
    render: ()=> <OnoffChanged />
}