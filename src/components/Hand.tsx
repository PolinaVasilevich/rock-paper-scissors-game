import React, { FC } from "react";

interface IHandProps {
  img: string;
  type: string;
  disabled?: boolean;
  handleClick: (type: string) => void;
}

const Hand: FC<IHandProps> = (props) => {
  const { img, type, disabled, handleClick } = props;
  return (
    <button
      className={`hand ${type}`}
      onClick={() => handleClick(type)}
      disabled={disabled}
    >
      <div className="hand__wrapper-img">
        {!props.children ? (
          <img src={img} alt={type} />
        ) : (
          <span className="timer">{props.children}</span>
        )}
      </div>
    </button>
  );
};

export default Hand;
