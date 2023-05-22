import React, {useContext} from 'react';
import './StartScreen.css';
import Button from "../../atoms/Button/Button";
import {PATH} from "../../../helpers/constants"
import {GameContext} from "../../../state/BoardGameContext";

const StartScreen = () => {
  const state = useContext(GameContext);

  const setResponse = (res: string) => {
    state?.setUUID(res);
    state?.setIsStarted(true)
  }
  const startGame = () => {

    fetch(PATH.DOMAIN + PATH.START)
      .then(response => response.text())
      .then(res => setResponse(res))
      .catch(error => console.error(error));
  }
  return (
    <div className="start_screen">
      <Button text="Start" handleClick={startGame}/>
    </div>
  )
};

export default StartScreen;
