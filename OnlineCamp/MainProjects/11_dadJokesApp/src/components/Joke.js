import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { emojiSelector } from "../utils";

const Joke = props => {
  const { id, joke, score } = props.joke;
  console.log(props);
  const emoji = emojiSelector(score);

  

  const addJokeScore = () => {
    props.clicked(id, "add");
  };
  function removeJokeScore() {
    props.clicked(id, "subtract");
  }

  return (
    <div className="indiv-joke">
      <div className="indiv-joke-buttons">
        <p>
          <FontAwesomeIcon icon={faArrowUp} onClick={addJokeScore} />
        </p>
        <p>{score}</p>
        <p>
          <FontAwesomeIcon icon={faArrowDown} onClick={removeJokeScore} />
        </p>
      </div>
      <div className="indiv-joke-text">
        <p>{joke}</p>
        <p className="indiv-joke-emoji">
          <span role="img" aria-label="emojiName">
            {emoji}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Joke;
