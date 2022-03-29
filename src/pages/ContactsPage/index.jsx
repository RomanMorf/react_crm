import Modal from '../../components/Modal';
import React, { useState } from 'react';

function Contacts(props) {
  const [ showModal, setShowModal ] = useState(false)
  const [ text, setText ] = useState('')

  return (
    <div>
      <h1>Contacts page</h1>
      <input 
        type="text" 
        onChange={ (e) => setText(e.target.value) }
        onKeyUp={ (e) => e.key === 'Enter' ? setShowModal(true) : null }
        />
      <button onClick={ () => setShowModal(true)}>Ask somethimg</button>
      {showModal && <Modal 
        headerText ='Are you sure ?'
        text = { text }
        confirm
        onCloseModal = {() => setShowModal(false)}
        onConfirm = {() => setShowModal(false)}
        onCancel = {() => setShowModal(false)}
      />}
    </div>
  )
}

export default Contacts;