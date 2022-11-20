import logo from './logo.svg';
import './App.css';
import Btn from './Btn';
import ModeToggler from './ModeToggler';

function App() {

  function numGuessClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1
    console.log(randomNum)
    let userInput = prompt('type a number');
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`)
  }
  return (
    <div >
      <Btn />
      <ModeToggler />
      <button onClick={numGuessClick}>
        Guess the number between 1 and 3
      </button>
    </div>
  );
}

export default App;
