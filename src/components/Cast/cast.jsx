import { useState, useEffect } from 'react';
import { useParams} from "react-router-dom";

export const Cast = () => {
    const [movies, setMovie] = useState('');

    const { movieId }  = useParams()
    // console.log(movieId)

    useEffect(() => {
        const key = 'a42a61c067e66eee5834012056e5662a';
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            }).then(data => setMovie(data.cast))
    }, [movieId])


     return (
    <div><ul>
              {movies && movies.map(movie => (
                  <li key={movie.id}>
                      <img src={movie.profile_path} alt={movie.name}></img>
                <p>{movie.name}</p>
                <p>Character : {movie.character}</p></li>
              ))}
          </ul> 
          </div>)
}