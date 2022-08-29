import {fetchHome} from 'api/api'
import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

export default function Home() {
const [movies, setMovie] = useState('')

  const location = useLocation();

    useEffect(() => {
        fetchHome().then(data=> setMovie(data.results))
    },[])

  return (
    <main>
          <h1>Trending today</h1>
           <ul>
              {movies && movies.map(movie => (
                  <li key={movie.id}>
                  <Link to={`movies/${movie.id}`}
                     state={{ from: location }}
                   >{movie.title || movie.name}</Link></li>
              ))}
          </ul> 
</main>
  );
};