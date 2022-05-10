import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo } from 'src/store/userSlice'
import { getFromDatabase } from 'src/helpers/firebase/getFromDatabase'
import { getUid } from 'src/helpers/getUid';

function Home() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.users.currentUser)


  useEffect( async () => {
    const uid = getUid()
    const user = await getFromDatabase(`users/${uid}/userInfo`)
    if (user) dispatch(setUserInfo(user))
    console.log(user, 'use form home');

  }, []);

  return (
    <div>
      <h1>Home page</h1>
      {user && 
      <>
        <h2>Wellcome {user.nickName ? user.nickName : `${user.name} ${user.surname}`}</h2> 
        <p>Have a good day {':)'}</p> 
      </>
      }

    </div>
  )
}

export default Home;