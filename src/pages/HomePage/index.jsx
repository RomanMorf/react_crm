import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFromDatabase } from 'src/helpers/firebase/getFromDatabase'
import { setUserInfo } from 'src/store/userSlice'
import { getUid } from 'src/helpers/getUid';
import { useLoading } from 'src/hooks/useLoading';

import Loader from 'src/components/Loader';

function Home() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.users.currentUser)
  const {loading, setLoading} = useLoading(true)

  async function fetchUserData() {
    const uid = await getUid()
    const user = await getFromDatabase(`users/${uid}/userInfo`)
    dispatch(setUserInfo(user))
  }

  useEffect(() => {
    setLoading(true)

    fetchUserData()

    setLoading(false)
  }, []);

  return (
    <div>
      <h1>Home page</h1>
      {loading && <Loader/>}
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