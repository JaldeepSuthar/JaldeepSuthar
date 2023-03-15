// 1) import react and reactDom libraries

import React from 'react';
import  ReactDOM  from 'react-dom/client';

// 2) get the reference to the div with ID root
const el = document.getElementById("root");
// 3) Tell react to take control of that element
const root =ReactDOM.createRoot(el);
// 4) create a component 
function App(){
    return <h1> hii There</h1>;
}
// 5) Show the component on the screen
root.render(<App />);