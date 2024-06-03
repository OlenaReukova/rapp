import React from 'react';

function Fruits() {
  const fruits = ['apple', 'mango', 'banana', 'orange', 'kiwi'];
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}

export default Fruits;
