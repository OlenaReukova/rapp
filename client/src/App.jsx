import React from 'react';
import './App.css';
import Hello from './components/Hello';
import Fruits from './components/Fruits';
import Songs from './components/Songs';
import ConditionalRendering from './components/ConditionalRendering';
import Message from './components/Message';

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
      <Songs />
      <ConditionalRendering />
      <Message />
    </div>
  );
}

export default App;
