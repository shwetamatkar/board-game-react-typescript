import React, {useContext, useState} from 'react';
import './PayerSelection.css';
import {MAX_PLAYERS, MIN_PLAYERS, PATH} from "../../../helpers/constants"
import {NoOfPlayerReq, ResType} from "../../../types/types"
import {GameContext} from "../../../state/BoardGameContext";
import LabeledInput from "../../molecules/LabeledInput/LabeledInput";
import Button from "../../atoms/Button/Button";

const PayerSelection = () => {
  const state = useContext(GameContext);
  const [noOfPlayers, setNoOfPlayers] = useState<number>(2);
  const setResponse = (res: ResType) => {

    state?.setFields(res.fields);
    state?.setPlayers(res.players)
    state?.setNextPlayer(res.nextPlayer)
  }

  const getValue = (val: any) => {
    setNoOfPlayers(val)
  }
  const selectPlayer = () => {

    const reqData: NoOfPlayerReq = {
      id: state?.UUID,
      numberOfPlayers: noOfPlayers
    }
    fetch(PATH.DOMAIN + PATH.PLAYER, {
      method: 'post',
      body: JSON.stringify(reqData),
      headers: {'Content-Type': 'application/json'},
    })
      .then(response => response.json())
      .then(res => setResponse(res))
      .catch(error => console.error(error));
  }
  return (
    <div className="player-selection_wrapper">

      <LabeledInput label="Enter number of players" inputType="number" handleChange={getValue} placeholder=""
                    value={noOfPlayers}/>

      {(noOfPlayers >= MIN_PLAYERS && noOfPlayers <= MAX_PLAYERS) ? <Button text="Play" handleClick={selectPlayer}/> :

        <p className="errorText">Number of players should be between 2 and 4</p>}
    </div>
  )
};

export default PayerSelection;
