import './App.css';
import React, { useState } from 'react';

import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
import Alert from './components/Alert.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);

  const alerttt = (message, Type) => {
    setAlert({
      msg: message,
      type: Type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const [mode, setMode] = useState('light');

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      alerttt('darkmode has been enabled', 'success');
      document.title = 'my first app enable dark mode';
      setInterval(() => {
        document.title = 'enable dark mode';
      }, 2000);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      alerttt('lightmode has been enabled', 'success');
      document.title = 'my first appenable light mode';
      setInterval(() => {
        document.title = 'enable dark mode';
      }, 1500);
    }
  };

  return (
    <>
      <Router>
        <Navbar homename="home" mode={mode} togglemode={togglemode} />
        
        <div className="container">
          <Routes>
            <Route path="/alert" element={<Alert alert={alert} alerttt={alerttt} />} />
              <Route path="/navbar" element={<Navbar />} />
              <Route path="/" element={<Textform mode={mode} alerttt={alerttt} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
