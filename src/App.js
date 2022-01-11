import { useEffect, useState } from "react";
import Router from "Router";
import { auth } from 'fbinstance'
import { initializeAuth, onAuthStateChanged } from "@firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        setIsLogin(true)
      }else{
        setIsLogin(false)
      }
      setInit(true)
    })
  }, [])
  return (
    <>
      {init ? <Router isLogin={isLogin} /> : 'initializing...'}
      <footer>&copy; {new Date().getFullYear()} Flip</footer>
    </>
  )
}

export default App;
