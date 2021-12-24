import React, { FC } from "react";

interface IButtonProps {
  handleClick: () => void;
}

const Button: FC<IButtonProps> = (props) => {
  return (
    <button className="game-rules-btn" onClick={props.handleClick}>
      Rules
    </button>
  );
};

export default Button;
