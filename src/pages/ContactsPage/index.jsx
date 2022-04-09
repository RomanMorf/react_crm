import Modal from '../../components/Modal';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFromDatabase } from 'src/helpers/firebase/getFromDatabase';

function Contacts(props) {
  const [ showModal, setShowModal ] = useState(false)
  const [ text, setText ] = useState('')
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users)

  const fetchUsers = async () => {
    const defaultUserInfo = {
      email: "5roman_morf@ukr.net",
      name: "5555555",
      uid: "8Hkk3QIQpSZuFvxQ1YcqU9RBUiR2",
    }
    try {
      const result = await (await getFromDatabase())
      const users = result.users
      const usersArr = Object.keys(users).map( key => {
        if (!users[key].userInfo) {
          return {
            ...users[key],
            userInfo: defaultUserInfo
          }
        } else {
          return {
            ...users[key]
          }
        }
      })
      const newUsers = {}
      usersArr.forEach(user => {
        newUsers[user.userInfo.uid] = {...user}
      })
      console.log(newUsers, 'newUsers');
      // setToDatabase('newUsers', usersArr)
      console.log(usersArr, 'usersArr');

    } catch (e) {
      console.log(e)
      throw e
    }

  }

  const showUsers = () => {
    console.log(users, 'users');
  }

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
      <div>
      <button onClick={() => fetchUsers()}>Fetch users</button>
      <button onClick={showUsers}>showUsers</button>
      </div>
    </div>
  )
}

export default Contacts;