import { useEffect, useState } from "react";
import Router from "Router";
import { auth } from 'fbinstance'
import { onAuthStateChanged } from "@firebase/auth";

function App() {
  const user = auth.currentUser;
  const [isLogin, setIsLogin] = useState(user);
  useEffect(() => {
    onAuthStateChanged(auth, () => console.log(user))
  }, [])
  return (
    <>
      <Router isLogin={isLogin} />
      <footer>&copy; {new Date().getFullYear()} Flip</footer>
    </>
  )
}

export default App;
