import React from 'react';
import Classes from "./components/classes/index";
import Items from "./components/items/index";
import Champions from "./components/champions/index";
import NewItems from "./components/newItems/index";
import './App.css';

function App() {
  return (
    <div className="App">
      	<NewItems/>
		<Items/>
		<Classes/>
    	<Champions/>
    </div>
  );
}

export default App;
