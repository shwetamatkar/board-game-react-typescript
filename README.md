# Simple Board game using React, Context API, TypeScript and Atomic Design Structure

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## The simulation consists of:
- Start a new game (this provides you with a UUID for further calls against the API)
- An initiation for the number of players: input number of players
- Repeating calls to do the turns of each player: input dice number (engine decides which player is next and tracks all situations!)

## Game Rules
The game is a classic board game where between 2 and 4 players play against each other. It consists of a “straight road” of playing fields which have to be traversed. The goal is to pass the 30th playing field as the first player to win the game.
The starting player rolls the dice first and advances as many fields as the numbers on the dice show. If the field the player ends up at is a standard playing field his turn ends and the next player in line begins his turn. Players can share the same playing field. If the playing field is a special field, the player has to react to what the special field dictates. As described further down there are special fields like bonus and trap fields.
Bonus and trap fields can only be activated once per player turn. That means for example, if a player ends on a bonus field which advances him automatically 2 fields further and then ends up on a trap field, the trap is NOT activated for this player.
The special fields are permanently active and do not dissolve by being activated once from a player. That means that the same bonus can be used by more than one player.
The distribution of the bonus and trap fields (5 each) is done randomly at the beginning of each game, with the exception that bonus and trap fields cannot overlap each other. The specific type of the distributed bonus and trap fields is randomly picked when a player activates the special field. That means for example the 5th playing field is a trap field. Player 1 activates it and randomly gets the trap type 2. In the next turn player 3 activates the same trap field (number 5 on the board) and the type of trap is again selected randomly. Meaning the location of the special fields stay the same for one game, the types are always selected randomly.

### Fields
- All-in-all 30 playing fields (including the 10 special fields)
- 5 bonus
- 5 traps

### Players
- 2-4
