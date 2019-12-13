import React from "react";

import styles from "./ModalWindow.module.css";
import MyPortal from "../../common/Portal";

const Modal = React.memo(props => {
  const cancelModal = () => {
    props.closeModalWindow();
  };

  return (
    <MyPortal>
      {props.showModal && (
        <div className={styles.modalWindow}>
          <div className={styles.modalBody}>
            {props.children}

            <button onClick={cancelModal}> Cancel</button>
          </div>
        </div>
      )}
    </MyPortal>
  );
});

export default Modal;
