import { useState, useEffect } from 'react';
import { useParams} from "react-router-dom";

export default function Reviews() {
    const [movies, setMovie] = useState('');

    const { movieId } = useParams()
    
    useEffect(() => {
        const key = 'a42a61c067e66eee5834012056e5662a';
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${key}`)
            .then(res => {
        if (res.ok) {
           return res.json();
        } 
    }).then(data=> setMovie(data.results))
    },[movieId])


    return (<div>  <ul>
        {movies.length > 0 ? (
          movies.map(movie => (
            <li key={movie.author}>
              <p>Author: {movie.author}</p>
              <p>Content: {movie.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </ul></div>)
}