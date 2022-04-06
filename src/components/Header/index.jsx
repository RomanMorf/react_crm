import React from 'react';
import Navigate from '../Navigate'
import './style.scss';
import { useDispatch, useSelector } from 'react-redux'
import { singOutUser } from '../../store/authSlice'

function Header() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth.auth)

  return (
    <div className='header'>
      {auth && <button onClick={() => dispatch(singOutUser())}>Log out</button>}
      <Navigate />
    </div>
  )
}

export default Header;