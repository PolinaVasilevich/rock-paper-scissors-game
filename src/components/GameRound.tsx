import React, { FC, useEffect, useState } from "react";
import Hand from "./Hand";

type selectedHand = {
  img: string;
  type: string;
};

interface IGameRoundProps {
  playerSelection: selectedHand;
  computerSelection: selectedHand;
  result: string;
  handleClick: () => void;
}

const GameRound: FC<IGameRoundProps> = (props) => {
  const { playerSelection, computerSelection, result, handleClick } = props;

  const [isShowResult, setIsShowResult] = useState(false);
  const [timer, setTimer] = useState(3);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    } else {
      setIsShowResult(true);
    }
  });

  return (
    <div className="game-round">
      <div className="game-round__container">
        <h3 className="game-round__title">You picked</h3>
        <Hand
          img={playerSelection.img}
          type={playerSelection.type}
          handleClick={() => {}}
          disabled
        />
      </div>

      {isShowResult ? (
        <div>
          <p className="game-round__text">{result}</p>
          <button className="game-round__btn" onClick={handleClick}>
            Try again
          </button>
        </div>
      ) : null}

      <div className="game-round__container">
        <h3 className="game-round__title">The computer picked</h3>

        {isShowResult ? (
          <Hand
            img={computerSelection.img}
            type={computerSelection.type}
            handleClick={() => {}}
            disabled
          />
        ) : (
          <>
            <Hand img="" type="neutral" handleClick={() => {}} disabled>
              {timer}
            </Hand>
          </>
        )}
      </div>
    </div>
  );
};

export default GameRound;
