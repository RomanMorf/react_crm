import React, { useState } from 'react';
import './style.scss'

import { getAuth,signOut } from 'firebase/auth'
import { setError } from 'src/store/errorSlice'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth)
  
    } catch (e) {
      dispatch(setError(e))
    }

    navigate('/auth/login')
  }

  return (
    <div className={isOpen ? 'user-nav open' :'user-nav' } onClick={() => setIsOpen(!isOpen)}>
      <div className="user-nav_icon" onClick={() => setIsOpen(!isOpen)}>
        <span className="material-icons-outlined">
          account_circle
        </span>
      </div>
      <div className={isOpen ? "user-nav_wrapper open" : "user-nav_wrapper"}>
        <div className="container relative">
          <div className={isOpen ?  "user-nav_body open" : "user-nav_body"}>
            <ul className='user-nav_list'>
              <li className='user-nav_item' onClick={() => navigate('/user')}>Cabinet</li>
              <li className='user-nav_item' onClick={logOut}>Log out</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserMenu