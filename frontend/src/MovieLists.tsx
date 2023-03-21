import React from 'react';

interface Movie {
  title: string;
  poster_path: string;
  id:number;

}
interface Props {
  movies: Movie[];
}

const MovieList = ({ movies }: Props) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.title}>
          <h3>{movie.title}</h3>
          {movie.title} (<img src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}  alt="Movie Image" />)
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
