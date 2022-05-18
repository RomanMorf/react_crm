import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFromDatabase } from 'src/helpers/firebase/getFromDatabase';
import { ModalComponent } from 'src/hooks/useModal';
// import { fetchUserData } from 'src/helpers/fetchUserData';
import { setToDatabase } from 'src/helpers/firebase/setToDatabase';
import { setUserInfo } from 'src/store/userSlice';
import { useLoading } from 'src/hooks/useLoading';
import { useModal } from 'src/hooks/useModal';
import { getUid } from 'src/helpers/getUid';

import FormEditUser from 'src/components/FormEditUser';
import Button from 'src/components/elements/Button';
import Loader from 'src/components/Loader';

function UserPage() {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.users.currentUser)
  const [tempUserInfo, setTempUserInfo] = useState(null)
  const {loading, setLoading, } = useLoading(false)
  const [editForm, setEditForm] = useState(false)
  const {showModal, setShowModal} = useModal()
  const uid = getUid()


  async function fetchUserData() {
    const uid = await getUid()
    const user = await getFromDatabase(`users/${uid}/userInfo`)
    dispatch(setUserInfo(user))
  }

  useEffect(() => {
    setLoading(true)

    fetchUserData()

    // setLoading(false)
    setTimeout(() =>     setLoading(false), 2000)
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
    <>
    <div className='user'>
      {loading && <Loader />}

      {(currentUser && !loading) && <h1>Wellcome {currentUser.name}</h1>}
      <div className="user_body">

        {(!editForm && !loading) &&  
        <>
          <Button name='Edit info' onClick={() => setEditForm(!editForm)}/>
          {currentUser && <div className="user_info">
            <p>Name - {currentUser.name}</p>
            <p>Surname - {currentUser.surname ? currentUser.surname : '...'}</p>
            <p>Nickname - {currentUser.nickName ? currentUser.nickName : '...'}</p>
            <p>Tel. number - {currentUser.tel ? currentUser.tel : '...'}</p>
            <p>Email - {currentUser.email}</p>
          </div>}
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
    </>
  )
}

export default UserPage;