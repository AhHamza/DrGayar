import { onAuthStateChanged } from "firebase/auth";
// import Login from "./Components/Users/Login";
import Register from "./Components/Users/Register";
import Login from "./Components/Users/Login";
import { auth } from "./db/Config";
import { useState, useEffect } from "react";
// import Cities from "./Components/Cities/Cities";
// import GuessMyNumber from "./Components/GuessMyNumber";

export default function App() {
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setUser(user)); //if (user) is authinticated set(user) -> doesn't have to register since i am already authinticated, else get register tab

    return () => {
      unsub();
    };
  }, []);

  const [user, setUser] = useState(undefined);

  return (
    // user ? <MessagesList /> : <Login /> 
    <Login/>
    
    // <MessagesList />
  );
}
