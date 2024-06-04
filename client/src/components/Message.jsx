import React from 'react';

export default function Message() {
  function handleClick() {
    console.log('the button is clicked');
  }
  //Event Handling In React
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}
