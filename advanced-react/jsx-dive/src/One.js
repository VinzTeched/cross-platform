import './App.css';
import React from 'react'

const Button = ({children, backgroundColor}) => {
  return <button style={{backgroundColor}}>{children}</button>
}

const Alert = ({ children }) => {
  return (
    <>
      <div className="Overlay" />
      <div className="Alert">{children}</div>
    </>
  )
}

const DeleteButton = () => {
  return <Button backgroundColor={"red"}>Delete</Button>
}

const buttonElement = {
  type: Button,
  props: {
    color: 'green',
    children: "Submit!",
  },
};

const output = React.cloneElement(buttonElement, {disabled: false})

function One() {

  return (
    <div className="App">
      <header>Little Lemon Restaurant 🍕</header>
      <Alert>
        <h4>Delete Account</h4>
        <p>Are you sure you want to proceed? You will miss all your delicious recipes!</p>
        <DeleteButton />
        <output />
      </Alert>
    </div>
  );
}

export default One;
