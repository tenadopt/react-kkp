import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    console.log("App rendering");
    return (
        <div>
            <div>This is APP component</div>
            <div>Article 1</div>
            <Rating value={1}/>
            <Accordion title={"Menu"} collapsed={true}/>
            <div>Article 2</div>
            <Rating value={4}/>
            <Accordion title={"Users"} collapsed={false}/>
            <Rating value={7}/>
        </div>
    );
}
export default App;
