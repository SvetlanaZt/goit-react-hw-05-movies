import { useParams, Outlet, useLocation, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { StyleHomeMovies, StyledDiv, StyledDivBlock, StyledAddit } from './HomeMovies.styled';
import { fetchHomeMovies } from 'api/api'
    
export default function HomeMovies() {
    const [movies, setMovie] = useState('');
    const [saveLocation, setsaveLocation] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
     const navigate = useNavigate();
  
    const locationState = location.state;
    const locationName = location.state.location.pathname;
    console.log(locationName)
    useEffect(() => { 
        if (locationState) {
    setsaveLocation(locationName)
        }
        
    }, [locationState, locationName])
  
    useEffect(() => {
        fetchHomeMovies(movieId).then(data => setMovie(data))
    }, [movieId])

    
    function goBack() {
        if (locationName) {
           return navigate(saveLocation)
       }
            return  navigate('/');
    }
    
    const dataYear = parseInt(movies.release_date);
    const userScore = parseInt(movies.vote_average * 100 / 10)
    
    return (
    <div>
            {movies && <>
                <button type="button" onClick={goBack}>Go Back</button>
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
            <StyleHomeMovies to={'/cast'}>Cast</StyleHomeMovies>
                <StyleHomeMovies to={'reviews'}>Reviews</StyleHomeMovies>
                </StyledAddit>
            <Outlet />
            
            
        </div>
     )
 }
