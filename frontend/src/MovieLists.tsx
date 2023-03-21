import React from 'react';
import './index.css';

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
    // <ul>
    //   {movies.map(movie => (
    //     <li key={movie.title}>
    //       <h3>{movie.title}</h3>
    //       {movie.title} (<img src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}  alt="Movie Image" />)
    //     </li>
    //   ))}
    //     {/* <button onClick={handleAddMovie}>Add Movie</button> */}
    // </ul>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img className="w-full h-64 object-cover object-center" src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} alt={movie.title} />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">{movie.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
