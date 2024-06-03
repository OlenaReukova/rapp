import React from 'react';

function Song({ id, title, url }) {
  return (
    <li>
      {id} {title} {url}
    </li>
  );
}

export default Song;
