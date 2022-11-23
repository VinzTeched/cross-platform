import "./App.css";
import React from "react";
import Child from "./Child";

function App(props) {

  const [date] = React.useState(new Date()); 

  return (
      <div className="App">
        <Child message={date.toLocaleTimeString()} />
      </div>
  );
};

export default App;
