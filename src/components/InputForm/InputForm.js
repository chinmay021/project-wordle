import React, { useState } from "react";
import Result from "../Result/Result";

function InputForm({ setGuessList, guessList, gameState }) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ guess });
    if (guessList.length < 6) {
      setGuessList((guessList) => [...guessList, guess]);
    }
    setGuess("");
  };
  return (
    <>
      {/* {gameState === "PLAYING" ? ( */}
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          disabled={gameState !== "PLAYING"}
          type="text"
          id="guess-input"
          required
          value={guess}
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
        />
      </form>
      {/* // ) : (
      //   <>
      //     <Result gameState={gameState} />
      //   </>
      // )} */}
    </>
  );
}

export default InputForm;
