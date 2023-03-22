import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useForm, SubmitHandler } from 'react-hook-form';
import { getMovies } from './api';
import { Movie } from './types';

type FormData = {
  search: string;
};

const MovieList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { register, handleSubmit } = useForm<FormData>();
  //useQuery is used to fetch the list of popular movies from the getMovies function when the component is first rendered
  const { data: movies = [], isLoading } = useQuery('movies', getMovies);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setSearchTerm(data.search);
  };

  //filteredMovies array will contain only the movies whose title contains the searchTerm
  //toLowerCase() method is called on both the title and the searchTerm to ensure that the comparison is case-insensitive.
  const filteredMovies = movies.filter((movie: Movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const[activeTooltip, setActiveTooltip] = useState('');

  return (
    <div className="container mx-auto py-9">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center border-b border-b-2 border-red-700 py-2">
          <input
            {...register('search')}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search movies..."
          />
          <button
            className="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
      {isLoading ?  (
       // start of the website and at first the isloading is true so message loading is displayed until the movie list is complete then it will become false
        <div>Loading... </div>
      ) : filteredMovies.length ? (
        // styling the cards that include the poster, the title, and the review of the movie 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8"> 
          {filteredMovies.map((movie: Movie) => (
            // displaying the image, review, and the title whose background is black
            <div key={movie.id} className="bg-black rounded-lg overflow-hidden">
              <img
                className="w-full h-65 object-cover"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{movie.title}</h2>
                <p className="text-gray-400">{movie.overview}</p>
              </div>
            </div>
          ))}
        </div>
         ) : (
          <div className="text-center mt-8">No results found.</div>
        )}
    </div>
  );
};

export default MovieList;


