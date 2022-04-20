import React, { useEffect } from 'react';
import './style.scss';

function Modal({
  headerText,
  text,
  onCloseModal,
  confirmBtn,
  onConfirm,
  onCancel,
  children
}) {

  function closeModal(e) {
    if (e.target.className === "modal_wrapper") {
      onCloseModal()
    }
  }

  useEffect(() => {
    if (confirmBtn) document.getElementById("confirm").focus()
  }, []);

  return (
    <div className="modal_wrapper" onClick={ (e) => closeModal(e) }>
      <div className="modal_body">
        { children }
        { headerText && <div className="modal_header">{ headerText }</div>}
        { text && <div className="modal_main">{ text }</div>}
        { confirmBtn && <div className="modal_footer">
          <button onClick={ onConfirm } id="confirm">Confirm</button>
          <button onClick={ onCancel } id="cancel">Cancel</button>
        </div>}
        <button className="modal_close" onClick={ onCloseModal }>
          <span className="material-icons">cancel</span>
        </button>
      </div>
    </div>
  )
}

export default Modal;