import React from 'react';
import PlayersSection from "../../molecules/PlayersList/PlayersSection";
import Board from "../../molecules/Board/Board";
import Dice from "../../molecules/Dice/Dice";

const GameScreen = () => {

  return (
    <div className="game-screen_wrapper">
      <PlayersSection/>
      <div className="game-board_wrapper">
        <Board/>
        <Dice/>
      </div>
    </div>
  )
};

export default GameScreen;
