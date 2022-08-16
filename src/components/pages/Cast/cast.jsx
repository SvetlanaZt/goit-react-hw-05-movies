import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {fetchCast} from 'api/api'

export default function Cast() {
    const [movies, setMovie] = useState('');

    const { movieId }  = useParams()

    useEffect(() => {
        fetchCast(movieId).then(data => setMovie(data.cast))
    }, [movieId])


     return (
    <div><ul>
              {movies && movies.map(movie => (
                  <li key={movie.id}>
                      <img src={`https://image.tmdb.org/t/p/w500${movie.profile_path}`} alt={movie.name} width='100px'></img>
                <p>{movie.name}</p>
                <p>Character : {movie.character}</p></li>
              ))}
          </ul> 
          </div>)
}