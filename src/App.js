import { useState } from "react";
import Router from "Router";
import { auth } from 'fbinstance'

function App() {
  const user = auth.currentUser;
  const [isLogin, setIsLogin] = useState(user);
  return (
    <>
      <Router isLogin={isLogin} />
      <footer>&copy; {new Date().getFullYear()} Flip</footer>
    </>
  )
}

export default App;
