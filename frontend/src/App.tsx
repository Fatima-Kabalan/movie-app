import React, { useState } from 'react';
import './App.css';


interface Movie {
  backdrop_path:string;
  id:number;
  original_language:string;
  original_title:string;
  overview:string;
  poster_path: string;
  release_date: string;
  title:string;
}

const App: React.FC = () => {
  const movies: Movie[] = [
    {
      "backdrop_path": "/mko7mKuAriEtSsNsi6mSLDcmpgt.jpg",
      "id": 32516,
      "original_language": "cn",
      "original_title": "金瓶梅2 愛的奴隸",
      "overview": "Rich and powerful Simon Qing has been schooled in the ways of sex by his virile father, but is still a virgin. That is, until he meets his first love Violetta who has fun with him all over his father’s estate. Their love does not last, so Simon embarks on a journey. Along the way he meets the comely nun Moon whom Simon deflowers and then marries. He then becomes enamored of Golden Lotus but she is married to dwarf Wu Da-Lang.",
      "poster_path": "/A1yymig7S0FTWv9cTtOwdI1cH5V.jpg",
      "release_date": "2009-03-04",
      "title": "The Forbidden Legend: Sex & Chopsticks 2",
  },
  {
      "backdrop_path": "/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg",
      "id": 717728,
      "original_language": "en",
      "original_title": "Jeepers Creepers: Reborn",
      "overview": "Forced to travel with her boyfriend to a horror festival, Laine begins to experience disturbing visions associated with the urban legend of The Creeper. As the festival arrives and the blood-soaked entertainment builds to a frenzy, she becomes the center of it while something unearthly has been summoned.",
      "poster_path": "/aGBuiirBIQ7o64FmJxO53eYDuro.jpg",
      "release_date": "2022-09-15",
      "title": "Jeepers Creepers: Reborn",
  },
  {
      "backdrop_path": "/22z44LPkMyf5nyyXvv8qQLsbom.jpg",
      "id": 631842,
      "original_language": "en",
      "original_title": "Knock at the Cabin",
      "overview": "While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.",
      "poster_path": "/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg",
      "release_date": "2023-02-01",
      "title": "Knock at the Cabin",
  },
  ];

  return (
    <div>
      <h1>My Favorite Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.title}>
            {movie.title} (<img src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}  alt="Movie Image" />)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;


