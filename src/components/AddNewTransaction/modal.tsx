import style from "./addNewTransaction.module.scss";

import {
  ReactEventHandler,
  ReactNode,

} from "react";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  handleCloseModal: () => void;
}

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  handleCloseModal,
}: ModalProps): JSX.Element  => {
  const handleOverlayClick: ReactEventHandler<HTMLElement> = (event) => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };
  return (
    <>
      {isOpen && (
        <div className={`${style.modal__overlay} ${style.one}`} onClick={handleOverlayClick}>
          <div className={style.modal}>{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
