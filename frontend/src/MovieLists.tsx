import React from 'react';

interface Movie {
  title: string;
  poster_path: string;
  id:number;

}
interface Props {
  movies: Movie[];
  // addMovie: (movie: Movie) => void;
}

const MovieList = ({ movies }: Props) => {
  // const handleAddMovie = () => {
  //   addMovie({ title: "New Movie", poster_path :"jwdijdws",id : 11 });
  // };
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.title}>
          <h3>{movie.title}</h3>
          {movie.title} (<img src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}  alt="Movie Image" />)
        </li>
      ))}
        {/* <button onClick={handleAddMovie}>Add Movie</button> */}
    </ul>
   
  );
};

export default MovieList;
