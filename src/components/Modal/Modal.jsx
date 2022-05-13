import React, { useEffect } from 'react';
import './style.scss';

import Button from 'src/components/elements/Button';

function Modal({
  textHeader,
  text,
  onCloseModal,
  confirmBtn,
  onConfirm,
  onCancel,
  children,
  confirmBtnName,
  cancelBtnName,
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
          <Button 
            id="confirm" 
            onClick={ onConfirm } 
            name={ confirmBtnName ? confirmBtnName : 'Confirm' } 
          />
          <Button 
            id="cancel" 
            onClick={ onCancel ? onCancel : onCloseModal } 
            name={ cancelBtnName ? cancelBtnName :'Cancel' } 
          />
        </div>}
        

        <button className="modal_close" onClick={ onCloseModal }>
          <span className="material-icons">cancel</span>
        </button>
      </div>
    </div>
  )
}

export default Modal;