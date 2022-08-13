// import  * as fetchHome from 'api/api'
import { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";

export default function HomeView() {
const [movies, setMovie] = useState('')

    useEffect(() => {
        const key = 'a42a61c067e66eee5834012056e5662a';
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
            .then(res => {
        if (res.ok) {
           return res.json();
        } 
    }).then(data=> setMovie(data.results))
    },[])

  return (
    <main>
          <h1>Trending today</h1>
           <ul>
              {movies && movies.map(movie => (
                  <li key={movie.id}>
                      <Link to={`movies/${movie.id}`}>{movie.title || movie.name}</Link></li>
              ))}
          </ul> 
</main>
  );
};