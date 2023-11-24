import Grid from "./../Grid/Grid";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from './../../constants';

function GuessResults({ guessList, answer, gamesState, setGameState }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        return <Grid guess={guessList[index]} key={index} answer={answer} gamesState={gamesState} setGameState={setGameState}/>;
      })}
    </div>
  );
}

export default GuessResults;
