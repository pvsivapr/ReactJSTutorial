import React from 'react';
//import logo from './logo.svg';
import './App.css';
import CustomComponentTuts from "./Tutorials/CustomComponentTutorial.js"
import PropTypesTuts from "./Tutorials/PropTypesTutorial.js"
import StateAndPropsTuts from "./Tutorials/StateAndPropsTutorial.js"

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
        <CustomComponentTuts />
        <PropTypesTuts/>
        <StateAndPropsTuts />
      </div>
    </div>
  );
}

export default App;
