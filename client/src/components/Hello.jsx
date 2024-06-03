import React from 'react';

function Hello({ person }) {
  return (
    <div>
      <h1>
        {person.name} {person.message}
        {person.emoji} {person.searNumber}
      </h1>
    </div>
  );
}

export default Hello;
