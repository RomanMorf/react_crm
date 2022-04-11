import { useState } from 'react';
import ModalComponent from 'src/components/Modal';

const useModal = () => {
  const [ showModal, setShowModal ] = useState(false)

  return {
    showModal,
    setShowModal,
    ModalComponent,
  }

}

export  { useModal, ModalComponent }