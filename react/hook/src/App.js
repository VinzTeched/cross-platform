import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import InputComponent from './InputComponent';
import RegisterForm from './RegisterForm';
import TextInputWithFocusButton from './TextInputWithFocusButton';

function App() {


  return (
    <div className='App'>  
      <RegisterForm />
      <TextInputWithFocusButton />
    </div>
  );
}

export default App;
