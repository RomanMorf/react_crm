import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo } from 'src/store/userSlice'
import { getFromDatabase } from 'src/helpers/firebase/getFromDatabase'
import { getUid } from 'src/helpers/getUid';

function Home() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.users.currentUser)

  console.log(user, 'user from Home');

  useEffect( async () => {
    const uid = getUid()
    const user = await getFromDatabase(`users/${uid}/userInfo`)
    if (user) dispatch(setUserInfo(user))

  }, []);

  return (
    <div>
      <h1>Home page</h1>
      {user && 
      <>
        <h3>Name - {user.name}</h3> 
        <p>Email - {user.email}</p>
      </>
      }

    </div>
  )
}

export default Home;