import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputForm from "../InputForm/InputForm";
import GuessResults from "./../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Result from "./../Result/Result";
import { useState } from "react";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);
  const [gameState, setGameState] = useState("PLAYING");

  if (guessList.at(-1) === answer && gameState === "PLAYING") {
    console.log("winner");
    setGameState("WINNER");
  } else if (
    guessList.length >= NUM_OF_GUESSES_ALLOWED &&
    gameState === "PLAYING"
  ) {
    console.log("loser", guessList.length);
    setGameState("LOSER");
  }

  return (
    <>
      <GuessResults
        guessList={guessList}
        answer={answer}
        gameState={gameState}
        setGameState={setGameState}
      />
      <InputForm
        setGuessList={setGuessList}
        guessList={guessList}
        gameState={gameState}
      />
      {gameState !== "PLAYING" && (
        <Result
          gameState={gameState}
          guessListSize={guessList.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
