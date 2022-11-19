import logo from './logo.svg';
import './App.css';

import Main from './Main';
import Bag from './Bag';
import Apples from './Apples';
import Promo from './Promo';

function Header() {
  return <h1>Hello world</h1>
}

function App() {
  return (
    <>
    <Header />
    <Main userName="Daniel" />
    <Bag children={<Apples color="yellow" number="5" />} />
    <Promo heading="Promo! Promo!! Promo!!!" promoSubHeading="Buy one glass, get one free" />
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
