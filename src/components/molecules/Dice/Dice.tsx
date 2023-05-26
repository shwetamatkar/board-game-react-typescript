import React, {useContext, useState} from 'react';
import './Dice.css';
import {GameContext} from "../../../state/BoardGameContext";
import {nextMoveReq, ResType} from "../../../types/types";
import Label from '../../atoms/Label/Label';
import Button from "../../atoms/Button/Button";
import {PATH} from "../../../helpers/constants"
import {startGame} from "../../../helpers/actions"

const Dice = () => {
  const state = useContext(GameContext);
  const [diceNumber, setDiceNumber] = useState<number>(0);

  const SIDES: number = 6;

  const setResponse = (res: ResType) => {

    // eslint-disable-next-line array-callback-return
    res.players.map((o) => {
        if (o.name === state?.nextPlayer?.name) {
          state?.setNotification(o.lastGamingSituation);
        }
      }
    );
    state?.setWinner(res.winner)
    state?.setFields(res.fields);
    state?.setPlayers(res.players)
    state?.setNextPlayer(res.nextPlayer)
  }

  const rollTheDice = () => {

    let randomNumber = Math.floor(Math.random() * SIDES) + 1;
    setDiceNumber(randomNumber);

    const reqData: nextMoveReq = {
      id: state?.UUID,
      player: state?.nextPlayer?.name,
      numberOfDice: randomNumber
    }
    fetch(PATH.DOMAIN + PATH.NEXT, {
      method: 'post',
      body: JSON.stringify(reqData),
      headers: {'Content-Type': 'application/json'},
    })
      .then(response => response.json())
      .then(res => setResponse(res))
      .catch(error => console.error(error));
  }

  const setStartResponse = (res: string) => {
    state?.setUUID(res);
    state?.setIsStarted(true)
  }

  const restartNewGame = () => {
    state?.setPlayers([]);
    state?.setWinner(null);
    state?.setNextPlayer(null);
    state?.setIsStarted(false);
    startGame(setStartResponse);
  }

  const DiceBlock = () => (
    <div className={`dice_block`}>
      <Label text={diceNumber}/>
    </div>
  )

  if (state?.winner || !state?.nextPlayer?.name) {
    return (
      <div className="dice-wrapper">

        <Button text="Start New Game" handleClick={restartNewGame}/>
      </div>
    )
  }

  return (
    <div className="dice-wrapper">
      {!!diceNumber && <DiceBlock/>}
      <Button text="Roll The Dice" handleClick={rollTheDice}/>
    </div>
  )
};

export default Dice;
