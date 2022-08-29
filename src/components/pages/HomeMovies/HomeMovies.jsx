import { useParams, Outlet, useLocation, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import { StyleHomeMovies, StyledDiv, StyledDivBlock, StyledAddit } from './HomeMovies.styled';
import { fetchHomeMovies } from 'api/api'
    
export default function HomeMovies() {
    const [movies, setMovie] = useState('');
    const { movieId } = useParams();
    const location = useLocation();
  
    const goBackLink = location?.state?.from ?? '/'
  
    useEffect(() => {
        fetchHomeMovies(movieId).then(data => setMovie(data))
    }, [movieId])

    
    const dataYear = parseInt(movies.release_date);
    const userScore = parseInt(movies.vote_average * 100 / 10)
    
    return (
    <div>
            {movies && <>
                <Link to={goBackLink}> go back</Link>
                <StyledDiv>
                    <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt={movies.title} width='250px'></img>
                    <StyledDivBlock>
                <h2>{movies.title}({dataYear})</h2>
                <p>User Score : {userScore}%</p>
                <h3>Overview:</h3> <p>{movies.overview }</p>
                        <h3>Genres:</h3> <p>{movies.genres.map(name => name.name)}</p>
                        </StyledDivBlock>
                </StyledDiv>
            </>}
            <StyledAddit>
                <p>Additional Information</p>
            <StyleHomeMovies to={'cast'}>Cast</StyleHomeMovies>
                <StyleHomeMovies to={'reviews'}>Reviews</StyleHomeMovies>
                </StyledAddit>
            <Outlet />
            
            
        </div>
     )
 }
