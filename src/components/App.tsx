import React, { FC, useEffect, useState } from "react";

import Header from "./Header";

import paper from "../assets/images/icon-paper.svg";
import rock from "../assets/images/icon-rock.svg";
import scissors from "../assets/images/icon-scissors.svg";

import rules from "../assets/images/image-rules.svg";

import Button from "./Button";
import Modal from "./Modal";
import Game from "./Game";
import GameRound from "./GameRound";

const App: FC = () => {
  const [score, setScore] = useState(0);

  const [toggleModal, setToggleModal] = useState(false);
  const hideModal = () => setToggleModal(false);
  const showModal = () => setToggleModal(true);

  const [playerSelection, setPlayerSelection] = useState("");

  const selectFigure = (type: string) => {
    setPlayerSelection(type);
  };

  const figiries = ["paper", "rock", "scissors"];

  const [gameOn, setGameOn] = useState(false);

  const [winner, setWinner] = useState("");
  const [result, setResult] = useState("");

  const [seconds, setSeconds] = useState(3);

  const computerSelection = React.useMemo(() => {
    const randomIndex = Math.floor(Math.random() * figiries.length);
    return figiries[randomIndex];
  }, [playerSelection]);

  const startGame = (): void => {
    setGameOn(true);
    if (
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "rock" && computerSelection === "scissors")
    ) {
      setWinner("player");
      setScore(score + 1);
      setResult("You win".toUpperCase());
    } else if (playerSelection === computerSelection) {
      setWinner("draw");
      setResult("Draw".toUpperCase());
    } else {
      setWinner("computer");
      setResult("You lose".toUpperCase());
    }
  };

  const pickHand = (type: string): string => {
    switch (type) {
      case "paper":
        return paper;
      case "rock":
        return rock;
      case "scissors":
        return scissors;
      default:
        return "";
    }
  };

  const startNewGame = () => {
    setGameOn(false);
    setPlayerSelection("");
  };

  useEffect(() => {
    if (playerSelection && computerSelection) {
      startGame();
    }
  }, [playerSelection, computerSelection]);

  return (
    <div className="app">
      <Button handleClick={showModal} />
      <Header score={score} />
      <Modal toggleModal={toggleModal} hideModal={hideModal} title="Rules">
        <img src={rules} alt="rules" />
      </Modal>

      {!gameOn ? <Game selectFigure={selectFigure} /> : null}
      {gameOn ? (
        <GameRound
          playerSelection={{
            img: pickHand(playerSelection),
            type: playerSelection,
          }}
          computerSelection={{
            img: pickHand(computerSelection),
            type: computerSelection,
          }}
          result={result}
          handleClick={startNewGame}
        />
      ) : null}
    </div>
  );
};

export default App;
