import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { StyledDiv, StyledInput } from './Movies.styled';
import {fetcMovies} from 'api/api'

export default function Movies() {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query')

    const [name, setName] = useState(query ??'');
    const [movies, setMovie] = useState('');

    const location = useLocation();

    useEffect(() => {
        if (!query) return;
        fetcMovies(query).then(data=> setMovie(data.results))
    },[query])

     const onSuubmit = evt => {
         evt.preventDefault();
         setSearchParams(`?query=${name}`)
    }

    return ( 
    <StyledDiv>
        <form onSubmit={onSuubmit}>
                <StyledInput
                    onChange={e=> setName(e.target.value)}
                    name='name'
                    type="text"
                    autoComplete='off'
                    autoFocus
                    value={name} 
                />
                <button type="submit">
      <span>Search</span>
    </button>
            </form>

             <div><ul>
              {movies && movies.map(movie => (
                  <li key={movie.id}>
                      <Link to={`/movies/${movie.id}`}
                          state={{ from: location }}
                      >{movie.title}</Link></li>
              ))}
          </ul> 
          </div>
        </StyledDiv>)
}
