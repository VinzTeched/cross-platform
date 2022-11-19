import logo from './logo.svg';
import './App.css';

import Main from './Main'

function Header() {
  return <h1>Hello world</h1>
}

function App() {
  return (
    <>
    <Header />
    <Main userName="Daniel" />
    </>
  );
}

function Heading() {
  let title = "This is some heading text";
  return (
    <h1>{title}</h1>
  );
}

export default App;
