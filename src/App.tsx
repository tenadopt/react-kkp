import React, {useState} from 'react';
import './App.css';
import {Rating, ValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {Onoff} from "./components/Onoff/Onoff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnoff} from "./components/UncontrolledOnoff/UncontrolledOnoff";

function App() {
    console.log("App rendering");

    const [ratingValue, setRatingValue] = useState<ValueType>(0)
    const [switchedOn, setSwitchedOn] = useState<boolean>(true)

    return (
        <div>
            <div>This is APP component</div>
            <div>Article 1</div>
            <UncontrolledRating/>
            <UncontrolledAccordion title={"Menu"}/>
            <div>Article 2</div>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledAccordion title={"Menu"}/>
            <Rating value={ratingValue} onClick={()=>setRatingValue(ratingValue)}/>
            {/*<Onoff switched={switchedOn} onChange={setSwitchedOn}/>*/}
            <UncontrolledOnoff onChange={setSwitchedOn}/>
            <>{switchedOn.toString()}</>
        </div>
    );
}
export default App;
