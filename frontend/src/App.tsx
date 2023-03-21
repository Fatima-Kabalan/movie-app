import React, { useState } from "react";
import MovieList from './MovieLists';
import './index.css';

interface Movie {
  title: string;
  poster_path: string;
  id:number;
}

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([   
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
  ]);

  // const addMovie = (movie: Movie) => {
  //   setMovies([...movies, movie]);
  // };

  return (
    <div className="bg-light-black h-screen w-screen">
      <h1>Movie List</h1>
      <MovieList movies={movies}  />
    </div>
  );
};


export default App;
