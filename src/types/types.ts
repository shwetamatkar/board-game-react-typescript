export type Player = {
  field: number;
  name: string;
  joker: boolean;
  lastGamingSituation: any | null;
  previousField: number;
  skipNextRound: boolean;
}

export enum FieldType {
  normal = 'NORMAL',
  trap = "TRAP",
  bonus = "BONUS"
}

export type Field = {
  fieldType: FieldType;
  position: number;
}

type SetValue = (value: any) => void;

export type BoardGameContextType = {
  isStarted: boolean;
  setIsStarted: SetValue;
  players: Player[];
  setPlayers: SetValue;
  UUID: string;
  setUUID: SetValue;
  fields: Field[];
  setFields: SetValue;
  nextPlayer: Player | null;
  setNextPlayer: SetValue;
  notification: string;
  setNotification: SetValue,
  winner: Player | null,
  setWinner: SetValue
};

export type ResType = {
  fields: Field[];
  players: Player[];
  nextPlayer: Player;
  winner: Player
}

export type NoOfPlayerReq = {
  id: string | any;
  numberOfPlayers: number;
}

export type nextMoveReq = {
  id: string | any;
  player: string | any;
  numberOfDice: number;
}