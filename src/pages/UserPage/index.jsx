import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo } from 'src/store/userSlice'
import { getFromDatabase } from 'src/helpers/firebase/getFromDatabase'
import { getUid } from 'src/helpers/getUid';
import { setToDatabase } from 'src/helpers/firebase/setToDatabase';

import Button from 'src/components/elements/Button';
import FormEditUser from 'src/components/FormEditUser';

function UserPage() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.users.currentUser)
  const [editForm, setEditForm] = useState(false)
  const uid = getUid()

  useEffect( async () => {
    if (!user) {
      const uid = getUid()
      const user = await getFromDatabase(`users/${uid}/userInfo`)
      if (user) dispatch(setUserInfo(user))
    }
  }, []);

  return (
    <div className='user'>
      <h1>Wellcome {user.name}</h1>
      <div className="user_body">
        {!editForm && 
        <>
          <Button name='Edit info' onClick={() => setEditForm(!editForm)}/>
          <div className="user_info">
            <p>Name - {user.name}</p>
            <p>Surname - {user.surname ? user.surname : '...'}</p>
            <p>Nickname - {user.nickName ? user.nickName : '...'}</p>
            <p>Tel. number - {user.tel ? user.tel : '...'}</p>
            <p>Email - {user.email}</p>
          </div>
        </>
        }
        {editForm &&  <FormEditUser 
            style={{maxWidth: '500px'}}
            title='Edit user info'
            formData={user} 
            handleSubmit={ user => {
              setEditForm(false)
              dispatch(setUserInfo(user))
              setToDatabase(`/users/${uid}/userInfo`, {...user})
            }} 
            handleCancel={() => setEditForm(false)}
          />
        }
      </div>

    </div>
  )
}

export default UserPage;