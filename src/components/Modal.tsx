import React, { FC } from "react";
import cross from "../assets/images/icon-close.svg";

interface IModalProps {
  title?: string;
  toggleModal: boolean;
  hideModal: () => void;
}

const Modal: FC<IModalProps> = (props) => {
  const { title, toggleModal, hideModal } = props;

  const ModalComponent = () => (
    <div className="modal-wrapper" onClick={hideModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h3>{title}</h3>
          <button className="modal__btn" onClick={hideModal}>
            <img src={cross} alt="close modal" />
          </button>
        </div>
        <div className="modal__content">{props.children}</div>
      </div>
    </div>
  );

  return toggleModal ? <ModalComponent /> : null;
};

export default Modal;
