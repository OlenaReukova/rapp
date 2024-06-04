import React from 'react';

function ConditionalRendering() {
  let message;
  let display = true;
  if (display) {
    message = <h1>Message 1</h1>;
  } else {
    message = <h1>Message 2</h1>;
  }
  return <div>{message}</div>;
}

export default ConditionalRendering;
