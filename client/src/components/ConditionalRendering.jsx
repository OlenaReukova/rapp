import React from 'react';
import Welcome from './Welcome';
import Code from './Code';

function ConditionalRendering() {
  //ConditionalRendering - this is a little bit messi code
  //   let message;
  //   let display = true;
  //   if (display) {
  //     message = <h1>Message 1</h1>;
  //   } else {
  //     message = <h1>Message 2</h1>;
  //   }
  //   return <div>{message}</div>;

  //good practice to use a ternary operator instead
  let display = true;
  //   return display ? <h1>Message 1 </h1> : <h1>Message 2</h1>;
  return display ? <Welcome /> : <Code />;
}

export default ConditionalRendering;
