import React from 'react';
import './style.scss';

import Navigate from 'src/components/Navigate';
import Button from 'src/components/elements/Button';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setError } from 'src/store/errorSlice'

import { 
  getAuth,
  signOut,
} from 'firebase/auth'


function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector(state => state.auth.auth)

  const logOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth)
  
    } catch (e) {
      dispatch(setError(e))
    }

    navigate('/react_crm/auth/login')
  }

  const links = [
    { name: 'Home', path: '/react_crm/'},
    { name: 'Weather', path: '/react_crm/weather'},
    { name: 'Contacts', path: '/react_crm/contacts'},
    { name: 'Todo', path: '/react_crm/todo'},
  ]


  return (
    <div className='header'>
      <div className='header_body'>
        <div>
          Logo
        </div>
        <div className='header_btn'>
          {auth && <Button onClick={logOut} name="Log out"/>}
        </div>
      </div>
      <div className="container">
        <Navigate links={links} />
      </div>
    </div>
  )
}

export default Header;