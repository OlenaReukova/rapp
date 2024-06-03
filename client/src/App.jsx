import React from 'react';
import './App.css';
import Hello from './components/Hello';
import Fruits from './components/Fruits';
import Song from './components/Song';

function App() {
  const person = {
    name: 'Rob',
    message: 'Hello',
    emoji: '😊',
    searNumber: [1, 4, 7],
  };
  return (
    <div className='App'>
      <Hello person={person} />
      <Fruits />
      <Song />
    </div>
  );
}

export default App;
