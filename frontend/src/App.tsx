// import React, { useState } from "react";
// import MovieList from './MovieLists';
// import './index.css';
// import Navbar from "./NavBar";


// interface Movie {
//   title: string;
//   poster_path: string;
//   id:number;
// }


// const App = () => {
//   const handleSearch = (query: string) => {
//     // TODO: Handle search functionality
//     console.log(`Search query: ${query}`);
//   };


//   const [searchResults, setSearchResults] = useState([]);

//   // const handleSearch = (results) => {
//   //   setSearchResults(results);
//   // }
//   const [movies, setMovies] = useState<Movie[]>([   
//     {
//       "id": 32516,
//       "poster_path": "/A1yymig7S0FTWv9cTtOwdI1cH5V.jpg",
//       "title": "The Forbidden Legend: Sex & Chopsticks 2",
//     },
//     {
//         "id": 717728,
//         "poster_path": "/aGBuiirBIQ7o64FmJxO53eYDuro.jpg",
//         "title": "Jeepers Creepers: Reborn",
//     },
//     {
//         "id": 631842,
//         "poster_path": "/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg",
//         "title": "Knock at the Cabin",
//     },
//     {
//       "id": 32516,
//       "poster_path": "/A1yymig7S0FTWv9cTtOwdI1cH5V.jpg",
//       "title": "The Forbidden Legend: Sex & Chopsticks 2",
//     },
//     {
//         "id": 717728,
//         "poster_path": "/aGBuiirBIQ7o64FmJxO53eYDuro.jpg",
//         "title": "Jeepers Creepers: Reborn",
//     },
//     {
//         "id": 631842,
//         "poster_path": "/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg",
//         "title": "Knock at the Cabin",
//     },
    
//   ]);

//   return (
//     <div className="bg-light-black h-screen w-screen">
    
//       <MovieList movies={movies}  />
//     </div>
//   );
// };


// export default App;
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import MovieList from "./MovieLists";

// type Movie = {
//   id: number;
//   title: string;
//   overview: string;
//   poster_path: string;
//   release_date: string;
// };

// type FormData = {
//   search: string;
// };

// function App() {
//   const [searchResults, setSearchResults] = useState<Movie[]>([]);
//   const { register, handleSubmit, reset } = useForm<FormData>();

//   const handleSearch = async ({ search }: FormData) => {
//     try {
//       const response = await axios.get(
//         `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=7ddaebc6d7da9611149903cc8f5663c1`
//       );
//       setSearchResults(response.data.results);
//       reset();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="p-4">
//       <form onSubmit={handleSubmit(handleSearch)} className="flex gap-2">
//         <input
//           type="text"
//           name="search"
//           placeholder="Search movies..."
//           className="border border-gray-300 p-2 rounded"
//           // ref={register({ required: true })}
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Search
//         </button>
//       </form>
//       <MovieList movies={searchResults} />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import MovieList from './MovieLists';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-900 text-gray-100 min-h-screen">
        <MovieList />
      </div>
    </QueryClientProvider>
  );
}

export default App;

