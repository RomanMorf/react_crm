import { useState } from 'react';
import ModalComponent from 'src/components/Modal';

const useModal = (initialState) => {
  const [ showModal, setShowModal ] = useState(initialState ? initialState : false)

  return {
    showModal,
    setShowModal,
    ModalComponent,
  }

}

export  { useModal, ModalComponent }