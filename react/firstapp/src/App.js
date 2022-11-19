import logo from './logo.svg';
import './App.css';

import Main from './Main';
import Bag from './Bag';
import Apples from './Apples';
import Promo from './Promo';
import Example from './Example';
import Example2 from './Example2';
import Example3 from './Example3';
import NumBillboard from './NumBIllBoard';

function Header() {
  return <h1>Hello world</h1>
}

function Logo() {
  const userPic = <img src={logo} style={{width:"300px",height:"300px"}}/>;
  return userPic;
}


const bool = false;
const str1 = "just";

function Example4(props) {
    return (
        <div>
            <h2>The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}
            </h2>
            <p>The value of the math prop is: <em>{props.math}</em></p>
            <p>The value of the str prop is: <em>{props.str}</em></p>
        </div>
    );
};

function App() {
  return (
    <>
    <Logo />
    <Header />
    <Main userName="Daniel" />
    <Bag children={<Apples color="yellow" number="5" />} />
    <Promo heading="Promo! Promo!! Promo!!!" promoSubHeading="Buy one glass, get one free" />
    <Example />
    <Example2 />
    <Example3 />
    <Example4 toggleBoolean={!bool}
        math={(10 + 20) / 3}
        str={str1 + ' another ' + 'string'}
        />
    <NumBillboard />
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
