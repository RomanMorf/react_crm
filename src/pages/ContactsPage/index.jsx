import { useModal } from 'src/hooks/useModal';
import { useInput } from 'src/hooks/useInput';

function Contacts() {
  const text = useInput('')
  const {showModal, setShowModal, ModalComponent} = useModal()



  return (
    <div>
      <h1>Contacts page</h1>
      <input 
        type="text" 
        {...text}
        />
      <button onClick={ () => setShowModal(true)}>Ask somethimg</button>
      {showModal && <ModalComponent 
        headerText ='Are you sure ?'
        text = { text.value }
        confirmBtn
        onCloseModal = {() => setShowModal(false)}
        onConfirm = {() => setShowModal(false)}
        onCancel = {() => setShowModal(false)}
      />}
    </div>
  )
}

export default Contacts;