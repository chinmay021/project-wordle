import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Grid({ guess, answer, gamesState, setGameState }) {
  let guessResult = [];
  if(guess){
    // gamesState = guess === answer ? setGameState('WINNER') : setGameState('PLAYING');
    guessResult = checkGuess(guess, answer);
    console.log(guessResult);
  }
  return (
    <>
      <p className="guess">
        {range(5).map((index) => (
          <span key={index} className={`cell ${!!guessResult[index] ? guessResult[index].status : ''}`}>
            {guess ? guess[index] : null}
          </span>
        ))}
      </p>
    </>
  );
}

export default Grid;
