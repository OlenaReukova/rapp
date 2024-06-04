import React from 'react';

function Song({ id, title, url, rating, soldOut }) {
  return (
    // <li>
    //   {id} {title} {url} {rating}
    // </li>

    //I want to display a song with rating >200
    //Conditionally Rendering List Items
    //   <>
    //     {rating > 200 ? (
    //       <li>
    //         {id} {title} {url} {rating}
    //       </li>
    //     ) : (
    //       ''
    //     )}
    //   </>
    // );

    //I want do display soldOut text
    //Conditionally Rendering A Message Using Ternary
    <>
      <li>
        {id} {title} {url} {rating} {soldOut ? 'soldOut' : ''}
      </li>
    </>
  );
}

export default Song;
