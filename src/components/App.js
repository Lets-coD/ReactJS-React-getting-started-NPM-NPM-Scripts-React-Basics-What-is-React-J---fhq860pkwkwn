import React, {Component, useState} from "react";
import '../styles/App.css';

//const App = () => {
//  return (
//    <></>
//  )
//}

import Slides from './Slides';

const title = "Slideshow App";

const App = ({slides}) =>  {

    return (
        <div>
            <h1 header={title}/>
            <div className="App">
                <Slides  slides={slides}/>
            </div>
        </div>
    );
}

export default App;

//export default App;
