import React,{useState} from 'react';
import './index.css';

interface Movie {
  title: string;
  poster_path: string;
  id:number;

}
interface Props {
  movies: Movie[];
}


const MovieList = ({ movies}: Props) => {
  
  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-screen-lg mx-auto mt-8 overflow-x-auto">
      {movies.map((movie) => (
        <div key={movie.id} className="flex-none" style={{ width: "240px" }}>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
             src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
              alt={movie.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{movie.title}</h2>
              {/* <p className="text-sm">{movie.description}</p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
  
export default MovieList;
