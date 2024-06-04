import React from 'react';

function Song({ id, title, url, rating }) {
  return (
    // <li>
    //   {id} {title} {url} {rating}
    // </li>

    //I want to display a song with rating >200
    //Conditionally Rendering List Items
    <>
      {rating > 200 ? ( // Colon added here
        <li>
          {id} {title} {url} {rating}
        </li>
      ) : (
        ''
      )}
    </>
  );
}

export default Song;
