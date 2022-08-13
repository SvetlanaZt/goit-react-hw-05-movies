import { Route, Routes, Outlet } from 'react-router-dom';
import HomeView from './HomeView/HomeView';
import  {Movies}  from './Movies/Movies'
import { NotFound } from './NotFound/NotFound'
// import { Layout } from './Layout/Layout';
import { HomeMovies } from './HomeMovies/HomeMovies'
import { Cast } from './Cast/cast'
import Navigation from './Navigation/Navigation'
import {Reviews} from './Reviews/reviews'




export function App ()  {
  return (
    <div>
      <Navigation/>
      <Routes>
        {/* <Route path='/' element={<Layout />}> */}
        <Route path='/' element={<HomeView />} />
        <Route path='/movies' element={<Movies />}/>
          <Route path='/movies/:movieId' element={<HomeMovies />}>
          <Route path='cast' element={< Cast />}></Route>
          <Route path='reviews' element={< Reviews/>}></Route>
          </Route>
        <Route path='*' element={<NotFound/>}/>
</Routes>
    </div>
  );
};
