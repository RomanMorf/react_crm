import './style.scss'
import { 
  updateDocToFirebase,
  addDocToFirebase,
  fetchDocFromFirebase,
  fetchDocsFromFirebase,
  useCollection
} from 'src/helpers/firebase/firestore';
import Chat from 'src/components/Chat';
import Loader from 'src/components/Loader';

import { useLoading } from 'src/hooks/useLoading';
import { dateFilter } from 'src/helpers/dateFilter';


function AdminPage() {
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

  const [messages] = useCollection('messages', 'createdAt')

  return (
    <div className='admin'>
      <h1>Admin Page</h1>
      {loading && <Loader />}

      <div className='admin_chat'>
      {(messages && !loading) && messages.map( (msg, idx) => <ChatMessage key={idx} message={msg}/>)}
      </div>

      <button onClick={() => updateDocToFirebase('users', 'VB5edRxp4tobYangzg1i', newUser2)}>updateDocToFirebase</button>
      <button onClick={() => addDocToFirebase('users', newUser)}>addDocToFirebase</button>
      <br />  <br />
      <button onClick={() => fetch()}>fetch</button>
      <button onClick={() => fetchAll()}>fetchAll</button>
      <br />  <br />

      <Chat />
    </div>
  )
}

const ChatMessage = ({message}) => {

  const { text, uid } = message

  const msgDate = dateFilter(message.createdAt.seconds, 'time')

  return <p>{msgDate}:{uid} - {text}</p>
}

export default AdminPage;