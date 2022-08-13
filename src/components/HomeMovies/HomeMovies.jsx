import { useParams, Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const HomeMovies = () => {
    const [movies, setMovie] = useState('');

    const  {movieId}  = useParams()
    // console.log(movieId)

    useEffect(() => {
        const key = 'a42a61c067e66eee5834012056e5662a';
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            }).then(data => setMovie(data))
    }, [movieId])

    const dataYear = parseInt(movies.release_date);
    const userScore = parseInt(movies.vote_average * 100 / 10)
    
    return (
    <div>
            {movies && <>
                <img src={movies.backdrop_path} alt={movies.title}></img>
                <h2>{movies.title}({dataYear})</h2>
                <p>User Score : {userScore}%</p>
                <p>Overview : {movies.overview }</p>
                <p>Genres : {movies.genres.map(name=> name.name)}</p>
                
            </>}
            <Link to={'cast'}>Cast</Link>
            <Link to={'reviews'}>Reviews</Link>
            <Outlet />
            
            
        </div>
     )
 }
