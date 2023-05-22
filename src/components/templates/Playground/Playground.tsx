import React, {useContext} from 'react';
import './Playground.css';
import {GameContext} from "../../../state/BoardGameContext";
import StartScreen from "../../organisms/StartScreen/StartScreen";
import PlayerSelection from "../../organisms/PlayerSelection/PlayerSelection";
import GameScreen from "../../organisms/GameScreen/GameScreen";

const Playground = () => {

  const state = useContext(GameContext);

  if (!state?.isStarted) {
    return (<div className="playground">
      <StartScreen/>
    </div>)
  }

  return (<>
    <div className="playground">
      {state?.players?.length ? <GameScreen/> : <PlayerSelection/>}
    </div>
  </>);

};

export default Playground;
