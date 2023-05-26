import React, {useContext} from 'react';
import './StartScreen.css';
import Button from "../../atoms/Button/Button";
import {GameContext} from "../../../state/BoardGameContext";
import {startGame} from "../../../helpers/actions"

const StartScreen = () => {
  const state = useContext(GameContext);

  const setResponse = (res: string) => {
    state?.setUUID(res);
    state?.setIsStarted(true)
  }

  return (
    <div className="start_screen">
      <Button text="Start" handleClick={() => {
        startGame(setResponse)
      }}/>
    </div>
  )
};

export default StartScreen;
