import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from '@firebase/auth';
import { auth } from 'fbinstance';
import React, { useState } from 'react'

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('')

  const onChange = (event) => {
    const { name, value } = event.target;
    if(name === 'email'){
      setEmail(value);
    }else if(name === 'password'){
      setPassword(value)
    }
  }
  const onHandleSubmit = async (event) => {
    event.preventDefault();
    try{
      let data;
      if(newAccount){
        data = await createUserWithEmailAndPassword(auth, email, password)
      }else {
        data = await signInWithEmailAndPassword(auth, email, password)
      }
    }catch(error){
      setError(error.message);
    }
  }

  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = async (event) => {
    const { name } = event.target;
    let provider;
    if(name === 'google'){
      provider = new GoogleAuthProvider();
    }
    const data = signInWithPopup(auth, provider);
    console.log(data);
    
  } 

  return (
    <>
      <span onClick={toggleAccount}>{newAccount ? 'Sign in' : 'Create Account'}</span>
      <form onSubmit={onHandleSubmit}>
        <input type="email" name="email" placeholder="Email" value={email} onChange={onChange} />  
        <input type="password" name="password" placeholder="Password" value={password} onChange={onChange} />
        <input type="submit" value={newAccount ? "Create Account" :"Log in"}/>
        <p>{error}</p>
      </form> 
      <div>
        <button onClick={onSocialClick} name="google">Continue with Google</button>
      </div>
    </>
  )
}