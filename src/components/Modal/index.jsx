import React, { useEffect } from 'react';
import './style.scss';

function Modal({headerText, text, onCloseModal, confirm, onConfirm, onCancel, children}) {

  function closeModal(e) {
    if (e.target.className === "modal_wrapper") {
      onCloseModal()
    }
  }

  useEffect(() => {
    document.getElementById("confirm").focus()
  }, []);

  return (
    <div className="modal_wrapper" onClick={ (e) => closeModal(e) }>
      <div className="modal_body">
        { children }
        { headerText && <div className="modal_header">{ headerText }</div>}
        { text && <div className="modal_main">{ text }</div>}
        { confirm && <div className="modal_footer">
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