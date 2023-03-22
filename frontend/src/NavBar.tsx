// import React from "react";


// const Navbar: React.FC<Props> = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = React.useState("");

//   const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     onSearch(searchQuery);
//   };

//   return (
//     <nav className="bg-black text-white py-4 px-8 flex items-center justify-between">
//       <h1 className="text-2xl font-bold">Movie App</h1>
//       <form onSubmit={handleSearch}>
//         <div className="flex items-center">
//           <input
//             type="text"
//             placeholder="Search for movies"
//             className="py-2 px-4 mr-4 rounded-lg bg-gray-800 text-white outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <button
//             type="submit"
//             className="bg-white text-black py-2 px-4 rounded-lg font-semibold"
//           >
//             Search
//           </button>
//         </div>
//       </form>
//     </nav>
//   );
// };

// export default Navbar;

// import { useForm } from 'react-hook-form';
// import axios from 'axios';


// type Props = {
//     onSearch: (query: string) => void;
// };

// function NavBar( {onSearch} : Props ) {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data) => {
//     axios.get(`https://api.themoviedb.org/3/search/movie?query=${data.search}&api_key=YOUR_API_KEY`)
//       .then(response => {
//         onSearch(response.data.results);
//       });
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder="Search movies..." name="search" ref={register} />
//       <button type="submit">Search</button>
//     </form>
//   );
// }

// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import MovieList from './MovieLists';

// function NavBar({ onSearch }) {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data) => {
//     axios.get(`https://api.themoviedb.org/3/search/movie?query=${data.search}&api_key=YOUR_API_KEY`)
//       .then(response => {
//         onSearch(response.data.results);
//       });
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder="Search movies..." name="search" ref={register} />
//       <button type="submit">Search</button>
//     </form>
//   );
// }

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    title: string;
};

export default function App() {
  const { register, handleSubmit, watch ,formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch("title")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("title")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("title", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.title && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}