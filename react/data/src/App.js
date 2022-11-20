import logo from './logo.svg';
import './App.css';
import Promo from './Promo';
import DogParent from './DogParent';
import Child from './Child';

function App() {

  const date = new Date();

  return (
    <div style={{padding:"30px"}}>
      <Promo/>
      <DogParent/>
      <Child message={date.toLocaleTimeString()} />
    </div>
  );
}

export default App;
