import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo } from 'src/store/userSlice'
import { getFromDatabase } from 'src/helpers/firebase/getFromDatabase'
import { getUid } from 'src/helpers/getUid';
import { setToDatabase } from 'src/helpers/firebase/setToDatabase';
import { ModalComponent } from 'src/hooks/useModal';
import { useModal } from 'src/hooks/useModal';

import Button from 'src/components/elements/Button';
import FormEditUser from 'src/components/FormEditUser';

function UserPage() {
  const dispatch = useDispatch()
  const {showModal, setShowModal} = useModal()
  const [editForm, setEditForm] = useState(false)
  const [tempUserInfo, setTempUserInfo] = useState(null)
  const currentUser = useSelector(state => state.users.currentUser)
  const uid = getUid()

  useEffect( async () => {
    if (!currentUser) {
      const uid = getUid()
      const user = await getFromDatabase(`users/${uid}/userInfo`)
      if (user) dispatch(setUserInfo(user))
    }
  }, []);

  const saveUserChanges = user => {
    setTempUserInfo(user)
    setShowModal(true)
  }

  const confirmChanges = () => {
    setEditForm(false)
    dispatch(setUserInfo(tempUserInfo))
    setToDatabase(`/users/${uid}/userInfo`, {...tempUserInfo})
    setShowModal(false)
  }

  const cancelChanges = () => {
    setTempUserInfo(null)
    setShowModal(false)
  }

  return (
    <div className='user'>
      <h1>Wellcome {currentUser.name}</h1>
      <div className="user_body">
        {!editForm && 
        <>
          <Button name='Edit info' onClick={() => setEditForm(!editForm)}/>
          <div className="user_info">
            <p>Name - {currentUser.name}</p>
            <p>Surname - {currentUser.surname ? currentUser.surname : '...'}</p>
            <p>Nickname - {currentUser.nickName ? currentUser.nickName : '...'}</p>
            <p>Tel. number - {currentUser.tel ? currentUser.tel : '...'}</p>
            <p>Email - {currentUser.email}</p>
          </div>
        </>
        }
        {editForm &&  <FormEditUser 
            style={{maxWidth: '500px'}}
            title='Edit user info'
            formData={currentUser} 
            handleSubmit={ user => saveUserChanges(user) } 
            handleCancel={ () => setEditForm(false) }
          />
        }
        {showModal && 
        <ModalComponent 
          text='Save user changes ?' 
          confirmBtn 
          onConfirm={confirmChanges} 
          onCancel={cancelChanges} 
          onCloseModal={cancelChanges} 
        />}
      </div>

    </div>
  )
}

export default UserPage;