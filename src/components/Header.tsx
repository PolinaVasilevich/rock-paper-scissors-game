import React, { FC } from "react";

interface IHeaderProps {
  score: number;
}

const Header: FC<IHeaderProps> = (props) => {
  return (
    <header className="header">
      <p className="header__logo">
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </p>
      <div className="header__score">
        <p>SCORE</p>
        <span>{props.score}</span>
      </div>
    </header>
  );
};

export default Header;
