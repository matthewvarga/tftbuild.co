import React from 'react';
import Classes from "./components/classes/index";
import Items from "./components/items/index";
import Champions from "./components/champions/index";
import NavBar from "./components/navbar/index";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className={"content"}>
        <Items/>
        <Classes/>
        <Champions/>
      </div>
    </div>
  );
}

export default App;
