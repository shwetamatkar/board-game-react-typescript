import React, {useContext} from 'react';
import './PlayersSection.css';
import {GameContext} from "../../../state/BoardGameContext";
import {Player} from "../../../types/types";
import Label from '../../atoms/Label/Label';

const PlayersSection = () => {
  const state = useContext(GameContext);

  const Player = ({name, field}: Player) => (
    <div className="player">


      <Label text={name}/>
      <h4>Current Position: {field}</h4>
      {state?.winner?.name === name && <h1 className="winnerText">Winner</h1>}
      {state?.nextPlayer?.name === name && !state?.winner && <span className="active" title="Active Player"></span>}
    </div>
  )

  return (
    <div className="player-list_container">
      <div className="player-list_wrapper">{state?.players.map((ele, i) => (<Player {...ele} key={i}/>))}</div>

      {!state?.winner && <p className="notification">{state?.notification}</p>}
    </div>
  )
};

export default PlayersSection;
