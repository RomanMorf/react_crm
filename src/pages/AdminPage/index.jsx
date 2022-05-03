import React, { useState } from 'react';

import './style.scss'
import { 
  updateDocToFirebase,
  addDocToFirebase,
  fetchDocFromFirebase,
  fetchDocsFromFirebase,
} from 'src/helpers/firebase/firestore';
import { useLoading } from 'src/hooks/useLoading';
import { sendTelegramMessage } from 'src/helpers/sendTelegramMessage'
import { sendEmail } from 'src/helpers/sendEmail'

import Chat from 'src/components/Chat';
import Loader from 'src/components/Loader';
import InputField from 'src/components/elements/InputField';

function AdminPage() {
  const [text, setText] = useState('')
  const {loading, setLoading} = useLoading(false)

  const newUser = {
    name: 'Romario',
    tel: '0637021303',
  }

  const newUser2 = {
    name: 'Romario - new',
    tel: '06370213032222',
    email: '0637021303@ukr.ua',
  }

  const fetch = async () => {
    setLoading(true)
    await fetchDocFromFirebase('users', 'rXVpp5jEB2JixCQJgFcH')
    setLoading(false)
  }

  const fetchAll = async () => {
    setLoading(true)
    await fetchDocsFromFirebase('users')
    setLoading(false)
  }


  return (
    <div className='admin'>
      <h1>Admin Page</h1>
      {loading && <Loader />}

      <InputField 
        handleInput={setText}
        handleEnter={() => sendTelegramMessage({text, cb: setText('')})}
        value={text}
        placeholder="Enter text message"
      />

      <button onClick={() => updateDocToFirebase('users', 'VB5edRxp4tobYangzg1i', newUser2)}>updateDocToFirebase</button>
      <button onClick={() => addDocToFirebase('users', newUser)}>addDocToFirebase</button>
      <br />  <br />
      <button onClick={() => fetch()}>fetch</button>
      <button onClick={() => fetchAll()}>fetchAll</button>
      <br />  <br />
      <button onClick={() => sendEmail({text: 'Test letter from website romario.top', to: 'kostromichov.roman@gmail.com', subject: 'test letter'})}>Send Email</button>
      <br /> <br />
      <button onClick={() => sendTelegramMessage({text, cb: setText('')})}>Send TG Message</button>
      <br /> <br />

      <Chat />
    </div>
  )
}


export default AdminPage;