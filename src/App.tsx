import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [welcomeMessage, setWelcomeMessage] = useState<string>('');

  useEffect(() => {
    if (welcomeMessage) return;

    axios
      .get('https://api.talel.io')
      .then((res) => setWelcomeMessage(res.data.message));
  });

  return (
    <>
      {welcomeMessage ? (
        <h1>{welcomeMessage}</h1>
      ) : (
        <h1>Loading message api</h1>
      )}
    </>
  );
};

export default App;
