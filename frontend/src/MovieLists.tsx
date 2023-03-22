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
  const { data: movies = [], isLoading } = useQuery('movies', getMovies);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setSearchTerm(data.search);
  };

  const filteredMovies = movies.filter((movie: Movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input
            {...register('search')}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search movies..."
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {filteredMovies.map((movie: Movie) => (
            <div key={movie.id} className="bg-black rounded-lg overflow-hidden">
              <img
                className="w-full h-64 object-cover"
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
      )}
    </div>
  );
};

export default MovieList;


