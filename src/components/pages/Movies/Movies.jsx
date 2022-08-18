// import { Outlet } from "react-router-dom"
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { StyledDiv, StyledInput } from './Movies.styled';
import {fetcMovies} from 'api/api'

export default function Movies() {
    const [name, setName] = useState('');
    const [movies, setMovie] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        fetcMovies(name).then(data=> setMovie(data.results))
    },[name])

     const onSuubmit = evt => {
         evt.preventDefault();
         const vslue = evt.target.name.value;
          setName(vslue);
         navigate(`?query=${vslue}`, { replace: true });
    }

    return ( 
       <StyledDiv>
            <form onSubmit={onSuubmit}>
                <StyledInput
            name='name'
      type="text"
      autoComplete='off'
      autoFocus
                />
                <button type="submit">
      <span>Search</span>
    </button>
            </form>

             <div><ul>
              {movies && movies.map(movie => (
                  <li key={movie.id}>
                      <Link to={`/movies/${movie.id}`}
                          state={{ location }}
                      >{movie.title}</Link></li>
              ))}
          </ul> 
          </div>
        </StyledDiv>)
}
