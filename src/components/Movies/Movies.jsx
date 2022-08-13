// import { Outlet } from "react-router-dom"
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

export const Movies = () => {
    const [name, setName] = useState('');
    const [movies, setMovie] = useState('');

const navigate = useNavigate();

    useEffect(() => {
        const key = 'a42a61c067e66eee5834012056e5662a';
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${name}`)
            .then(res => {
        if (res.ok) {
           return res.json();
        } 
    }).then(data=> setMovie(data.results))
    },[name])

     const onSuubmit = evt => {
         evt.preventDefault();
         navigate(`?query=${name}`, { replace: true })
         
    }
    
    const onChange = evt => {
    setName(evt.target.value)
    }

    return ( 
       <main>
            <form onSubmit={onSuubmit}>
                <input
      name="name"
        value={name}
        onChange={onChange}
      type="text"
      autoComplete='off'
      autoFocus
      placeholder="Search images and photos"
                />
                <button type="submit">
      <span>Search</span>
    </button>
            </form>

             <div><ul>
              {movies && movies.map(movie => (
                  <li key={movie.id}>
                      <Link to={`/movies/${movie.id}`}> { movie.title}</Link></li>
              ))}
          </ul> 
          </div>
        </main>)
}
