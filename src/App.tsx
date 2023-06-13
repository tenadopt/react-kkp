import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

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


export default App;
