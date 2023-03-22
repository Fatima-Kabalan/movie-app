import React, { useState } from "react";
import MovieList from './MovieLists';
import './index.css';
import Navbar from "./NavBar";


interface Movie {
  title: string;
  poster_path: string;
  id:number;
}


const App = () => {
  const handleSearch = (query: string) => {
    // TODO: Handle search functionality
    console.log(`Search query: ${query}`);
  };
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

  return (
    <div className="bg-light-black h-screen w-screen">
      <Navbar onSearch={handleSearch} />
      <MovieList movies={movies}  />
    </div>
  );
};


export default App;
