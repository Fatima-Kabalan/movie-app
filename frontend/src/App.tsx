import React from 'react';
import MovieList from './MovieLists';

interface Movie {
  title: string;
  poster_path: string;
  id:number;

}

const movies: Movie[] = [
    {
      "id": 32516,
      "poster_path": "/A1yymig7S0FTWv9cTtOwdI1cH5V.jpg",
      "title": "The Forbidden Legend: Sex & Chopsticks 2",
    },
    {
        "id": 717728,
        "poster_path": "/aGBuiirBIQ7o64FmJxO53eYDuro.jpg",
        "title": "Jeepers Creepers: Reborn",
    },
    {
        "id": 631842,
        "poster_path": "/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg",
        "title": "Knock at the Cabin",
    },
];

function App() {
  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
