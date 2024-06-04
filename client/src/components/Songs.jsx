import React from 'react';
import Song from './Song';

function Songs() {
  const songs = [
    {
      id: 523523,
      title: 'Pete Tong, Ultra Naté, LP Giobbi, Jules Buckley - Free',
      url: 'https://youtu.be/YrjOdt4816Q?si=TJcK-YiARavUfW4Q',
      rating: 100,
    },
    {
      id: 523427,
      title: 'TCaptain & Tennille - Do That To Me One More Time',
      url: 'https://youtu.be/z_XfJyrNLRQ?si=REMMULZ7xE_to9j_',
      rating: 230,
    },
    {
      id: 82653,
      title: 'Michelle Gurevich - First Six Months of Love',
      url: 'https://youtu.be/NqGQIO2m3YQ?si=dCsmC9sHn2GI3rz_',
      rating: 2111,
    },
  ];

  return (
    <div>
      <ul>
        {songs.map((song) => (
          // <li key={song.id}>
          //   {song.id} {song.title} {song.url}
          //   {song.rating}
          // </li>
          //   {song.rating}
          <Song
            key={song.id}
            id={song.id}
            title={song.title}
            url={song.url}
            rating={song.rating}
          />
        ))}
      </ul>
    </div>
  );
}

export default Songs;
