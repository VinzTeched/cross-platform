import logo from './logo.svg';
import './App.css';
import React from 'react';
import Heading from './Heading';

function App() {
  const [word, setWord] = React.useState("Eat");
  const [date, setDate] = React.useState(new Date());

  function handleClick() {
    setWord("Drink")
  }

  return (
    <div className='App'>  
      <Heading message={word + " at Little Lemon"} />
      <button onClick={handleClick}>Click here!</button>
    </div>
  );
}

export default App;
