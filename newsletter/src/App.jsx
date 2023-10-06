import { useState } from 'react';
import './App.css'
import Form from './components/Form';
import Success from './components/Success';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mailText, setMailText] = useState("");

  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setMailText(email);
  }

 
  return (
    <div className="App flex justify-center items-center min-h-screen charcoal-grey">
      {isLoggedIn ? <Success text={mailText} onClick={()=>setIsLoggedIn(false)} /> : <Form onSubmit={handleLogin} />}
    </div>
  );
}

export default App;
