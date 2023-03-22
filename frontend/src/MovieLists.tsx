import React, { useState } from "react";
import { useQuery } from "react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { Movie } from "./types";
import axios from "axios";

type FormData = {
  search: string;
};

const API_KEY = "7ddaebc6d7da9611149903cc8f5663c1";

const MovieList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { register, handleSubmit } = useForm<FormData>();
  
  //useQuery is used to fetch the list of popular movies from the getMovies function when the component is first rendered
  const { data: movies = [], isLoading } = useQuery(
    ["movies", searchTerm],
    async () => {
      if (!searchTerm) {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        );
        return response.data.results;
      } else {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1`
        );
        return response.data.results;
      }
    }
  );

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setSearchTerm(data.search);
  };

  //filteredMovies array will contain only the movies whose title contains the searchTerm
  //toLowerCase() method is called on both the title and the searchTerm to ensure that the comparison is case-insensitive.
  const filteredMovies = movies.filter((movie: Movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-9">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center border-b border-b-2 border-red-700 py-2">
          <input
            {...register("search")}
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
      {isLoading ? (
        // start of the website and at first the isloading is true so message loading is displayed until the movie list is complete then it will become false
        <div>Loading... </div>
      ) : filteredMovies.length ? (
        // styling the cards that include the poster, the title, and the review of the movie
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {filteredMovies.map((movie: Movie) => (
            <a
              key={movie.id}
              href={`https://www.themoviedb.org/movie/${movie.id}`}
              target="_blank"
            >
              <div
                key={movie.id}
                className="card card-container bg-black rounded-lg overflow-hidden hover:opacity-60 relative"
              >
                <div className="front">
                  <img
                    className="w-full h-65 object-cover"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
                <div className=" p-4  top-0 left-0 w-full h-full opacity-0 hover:opacity-70 transition-opacity duration-300">
                  <h2 className="text-lg font-bold mb-2">{movie.title}</h2>
                  <p className="text-black-700">{movie.overview}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="text-center mt-8">No results found.</div>
      )}
    </div>
  );
};

export default MovieList;
