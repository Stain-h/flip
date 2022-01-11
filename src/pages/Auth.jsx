import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from 'fbinstance';
import React, { useState } from 'react'

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);

  const onChange = (event) => {
    const { name, value } = event.target;
    if(name === 'email'){
      setEmail(value);
    }else if(name === 'password'){
      setPassword(value)
    }
  }
  const onHandleSubmit = (event) => {
    event.preventDefault();
    let data
    if(newAccount){
      data = createUserWithEmailAndPassword(auth, email, password)
    }else {
      data = signInWithEmailAndPassword(auth, email, password)
    }
  }

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <input type="email" name="email" placeholder="Email" value={email} onChange={onChange} />  
        <input type="password" name="password" placeholder="Password" value={password} onChange={onChange} />
        <input type="submit" value={newAccount ? "Create Account" :"Log in"}/>
      </form> 
      <div>
        <button>Continue with Google</button>
      </div>
    </>
  )
}