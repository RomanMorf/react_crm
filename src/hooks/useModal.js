import { useState } from 'react';
import ModalComponent from 'src/components/Modal';

const useModal = (initialState) => {
  const [ showModal, setShowModal ] = useState(initialState ? initialState : false)

  const closeModal = () => setShowModal(false)

  return {
    showModal,
    closeModal,
    setShowModal,
    ModalComponent,
  }

}

export  { useModal, ModalComponent }