import type { Meta, StoryObj } from '@storybook/react';

import {Rating, RatingPropsType, ValueType} from './Rating';
import React, {ComponentProps, useState} from "react";

const meta: Meta<typeof Rating> = {
    component: Rating,
}

export default meta;

type Story = StoryObj<typeof Rating>;

export const EmptyRating: Story = {
   args: {
       value: 0,
       onClick: x=>x
   },
};

export const Rating1: Story = {
    args: {
        value: 1,
        onClick: x=>x
    },
};

export const Rating2: Story = {
    args: {
        value: 2,
        onClick: x=>x
    },
};

export const Rating3: Story = {
    args: {
        value: 3,
        onClick: x=>x
    },
};

export const Rating4: Story = {
    args: {
        value: 4,
        onClick: x=>x
    },
};

export const Rating5: Story = {
    args: {
        value: 5,
        onClick: x=>x
    },
};

export const RatingChanged = () => {
    const [rating, setRating] = useState<ValueType>(1);
    const handleRatingChanged = (value: ValueType) => {
        setRating(value)
    };
    return <Rating value={rating} onClick={handleRatingChanged} />;
};

export const Hooks: Story = {
    render: ()=> <RatingChanged />
}