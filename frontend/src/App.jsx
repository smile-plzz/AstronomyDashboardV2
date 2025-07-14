import React, { useState, useEffect } from 'react';
import APOD from './components/APOD';
import ISSLocation from './components/ISSLocation';
import MoonPhase from './components/MoonPhase';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Astronomy Dashboard</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          Toggle Dark Mode
        </button>
      </header>
      <main>
        <APOD />
        <ISSLocation />
        <MoonPhase />
      </main>
    </div>
  );
}

export default App;
