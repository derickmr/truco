import React from 'react';
import Score from '../src/components/score/Score';
import TrucoGaucho from '../src/games/TrucoGaucho';
import ButtonList from '../src/components/score/Score';
import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button';

function App() {
  return(
    <>
      <TrucoGaucho key="trucoGaucho"/>
    </>
    )
}

export default App;
