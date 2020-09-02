import React from 'react';
import Score from '../components/score/Score';
import Button from '../components/button/Button';

function TrucoGaucho() {
  const buttons = new Array<Button>();
  const envido = new Button("Envido", 123);
  const realEnvido = new Button("Real envido", 321);
  buttons.push(envido, realEnvido);
  return(
    <>
      <Score key={"jogador1"} buttons={buttons}/>
      <Score key={"jogador2"} buttons={buttons}/>
    </>
    )
}

export default TrucoGaucho;
