import React, { useEffect } from 'react';
import './style.scss';

import Button from '../elements/Button';

function Modal({
  textHeader,
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

        { textHeader && <div className="modal_header">{ textHeader }</div>}

        { text && <div className="modal_main">{ text }</div>}
        
        { confirmBtn && <div className="modal_footer">
          <Button onClick={ onConfirm } id="confirm" name='Confirm' />
          <Button onClick={ onCancel } id="cancel" name='Cancel' />
        </div>}
        

        <button className="modal_close" onClick={ onCloseModal }>
          <span className="material-icons">cancel</span>
        </button>
      </div>
    </div>
  )
}

export default Modal;