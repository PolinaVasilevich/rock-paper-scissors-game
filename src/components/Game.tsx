import React, { useState, FC } from "react";
import Hand from "./Hand";

import paper from "../assets/images/icon-paper.svg";
import rock from "../assets/images/icon-rock.svg";
import scissors from "../assets/images/icon-scissors.svg";

interface IGameProps {
  selectFigure: (type: string) => void;
}

const Game: FC<IGameProps> = (props) => {
  const figuries = [
    {
      img: paper,
      type: "paper",
    },
    {
      img: rock,
      type: "rock",
    },
    {
      img: scissors,
      type: "scissors",
    },
  ];

  return (
    <div className="game">
      <div className="game__content">
        {figuries.map((figure) => (
          <Hand
            key={figure.type}
            img={figure.img}
            type={figure.type}
            handleClick={props.selectFigure}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
