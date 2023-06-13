import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    debugger
    console.log("App rendering");
    return (
        <div>
            This is APP component
            <Rating/>
            <Accordion/>
        </div>
    );
}

function Rating() {
    debugger
    console.log("Rating rendering");
    return (
        <>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        </>
    )
}

const Accordion = () => {
    debugger
    console.log("Accordion rendering");
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

const AccordionTitle = () => {
    debugger
    console.log("AccordionTitle rendering");
    return (
        <h3>Меню</h3>
    )
}

const AccordionBody = () => {
    debugger
    console.log("AccordionBody is rendering");
    return (
        <div>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </div>
    )
}


const Star = () => {
    debugger
    console.log("Star is rendering");
    return (
        <div>
            star
        </div>
    )
}

export default App;
