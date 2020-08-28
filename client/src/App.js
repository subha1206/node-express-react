import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
function App() {
  const [value, setValue] = useState('');

  const getValue = (e) => {
    e.preventDefault();
    if (value) {
      setValue('');
    } else {
      axios.get('/api/home').then((res) => {
        setValue(res.data);
      });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{value}</p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          onClick={getValue}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
