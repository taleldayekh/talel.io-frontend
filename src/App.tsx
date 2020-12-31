import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [welcomeMessage, setWelcomeMessage] = useState<string>('')

  useEffect(() => {
    if (welcomeMessage) return

    axios.get('http://localhost:5000/api/v1/user').then(res => setWelcomeMessage(res.data.message))
  })

  return <>
  {welcomeMessage ? (
    <h1>{welcomeMessage}</h1>
  ) : (
    <h1>Loading message</h1>
  )}
  </>
}

export default App;
