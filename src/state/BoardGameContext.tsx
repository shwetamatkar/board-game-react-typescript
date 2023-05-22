import React, {createContext, useState} from 'react';
import {BoardGameContextType, Field, Player} from '../types/types';

export const GameContext = createContext<BoardGameContextType | null>(null);

type CtxProps = {
  children: React.ReactNode
}

const CtxProvider = (props: CtxProps) => {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [players, setPlayers] = useState<Player[]>([]);
  const [UUID, setUUID] = useState<string>("");
  const [fields, setFields] = useState<Field[]>([]);
  const [nextPlayer, setNextPlayer] = useState<Player | null>(null);
  const [notification, setNotification] = useState<string>("");
  const [winner, setWinner] = useState<Player | null>(null);

  return (<GameContext.Provider value={
    {
      isStarted,
      setIsStarted,
      players,
      setPlayers,
      UUID,
      setUUID,
      fields,
      setFields,
      nextPlayer,
      setNextPlayer,
      notification,
      setNotification,
      winner,
      setWinner
    }

  }>{props.children}</GameContext.Provider>);
};

export default CtxProvider;