import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {Onoff} from "./components/Onoff/Onoff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";

function App() {
    console.log("App rendering");
    return (
        <div>
            <div>This is APP component</div>
            <div>Article 1</div>
            <UncontrolledRating/>
            <UncontrolledAccordion title={"Menu"}/>
            <div>Article 2</div>
            <Rating value={4}/>
            <UncontrolledAccordion title={"Menu"}/>
            <Rating value={7}/>
            <Onoff/>
            <Onoff/>
            <Onoff/>
            <Onoff/>
            <Onoff/>
        </div>
    );
}
export default App;
