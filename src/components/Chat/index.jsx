import React, { useRef, useState } from 'react';
import './style.scss';

import { 
  getAuth,
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth';

import { fs } from 'src/firebase';
import { 
  addDoc,
  collection,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore"; 

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const auth = getAuth()

function Chat() {

  const [user] = useAuthState(auth);

  return (
    <div className="chat">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider)
        .then( async (userCredential) => {
          const user = userCredential.user;
        })
    } catch (e) {
      throw e
    }
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p className='center'>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

function SignOut() {

  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`} >
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}

function ChatRoom() {
  const [formValue, setFormValue] = useState('');
  const dummy = useRef();

  const messagesRef = (collection(fs, "messages"));
  const q = query(
    messagesRef, 
    orderBy("createdAt"), 
    );

  const [messages] = useCollectionData(q, { idField: 'id' });

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await addDoc(collection(fs, "messages"), {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });
    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
    <main>
      {messages && messages.map((msg, idx) => <ChatMessage key={idx} message={msg} />)}
      <span ref={dummy}></span>
    </main>

    <form onSubmit={sendMessage}>
      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
      <button type="submit" disabled={!formValue}>🕊️</button>
    </form>
    </>
  )
}

export default Chat;