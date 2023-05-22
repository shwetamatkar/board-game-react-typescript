import React, {useContext} from 'react';
import './Board.css';
import {GameContext} from "../../../state/BoardGameContext";
import {Field} from "../../../types/types";

const Board = () => {
  const state = useContext(GameContext);

  const Field = ({fieldType, position}: Field) => (<>


      <div className={`game-board_field ${fieldType.toLowerCase()}`} title={fieldType}>


        <h2 className="game-board_box">
          {position}
          {state?.players.map((o) => {
            if (o.field === position) return (<span key={`${position}_${o.name}`}><span className="player-name">
              {o.name} {o.joker && `Joker`}</span></span>)
          })}

        </h2>


      </div>
    </>
  )

  return (
    <div className="game-board">
      {state?.fields.map((ele, i) => (<Field key={i + 1} {...ele}/>))}

    </div>
  )
};

export default Board;
