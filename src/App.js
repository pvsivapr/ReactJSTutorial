import React from 'react';
import { BrowserRouter } from "react-router-dom"
//import logo from './logo.svg';
import './App.css';
// import CustomComponentTuts from "./Tutorials/CustomComponentTutorial.js"
// import PropTypesTuts from "./Tutorials/PropTypesTutorial.js"
// import StateAndPropsTuts from "./Tutorials/StateAndPropsTutorial.js"
// import RoutingTuts from "./Tutorials/RoutingTutorial.js"
// import ReactLifeCycleTuts from "./Tutorials/ReactLifeCycle.js"
import Home from "./Home.js"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="iDefinedClass">
        {/* <a href="https://reactjs.org/docs/lists-and-keys.html#keys">check when you are free</a> */}
        {/* <CustomComponentTuts /> */}
        {/* <PropTypesTuts/> */}
        {/* <StateAndPropsTuts /> */}
        {/* <RoutingTuts /> */}
        {/* <ReactLifeCycleTuts /> */}
        <BrowserRouter>
        <Home />
        </BrowserRouter>
        <div style={{margin:50}}></div>
      </div>
    </div>
  );
}

export default App;
