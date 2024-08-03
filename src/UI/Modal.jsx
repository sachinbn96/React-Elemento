import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, onClose, showModal }) {
  const dialog = useRef();

  useEffect(() => {
    let modal;
    if (showModal) {
      modal = dialog.current;
      modal.showModal();
    }
    // return () => {
    //   modal.close();
    // };
  }, [showModal]);

  return createPortal(
    <dialog ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
