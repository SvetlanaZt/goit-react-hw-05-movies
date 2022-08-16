import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NotFound from './NotFound/NotFound';
import Navigation from './Navigation/Navigation';
const Movies = lazy(() => import('./pages/Movies/Movies'));
const Home = lazy(() => import('./pages/Home/Home'));
const HomeMovies = lazy(() => import('./pages/HomeMovies/HomeMovies'));
const Cast = lazy(() => import('./pages/Cast/cast'));
const Reviews = lazy(() => import('./pages/Reviews/reviews'));


export function App ()  {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />}/>
          <Route path='/movies/:movieId' element={<HomeMovies />}>
          <Route path='cast' element={< Cast />}></Route>
          <Route path='reviews' element={< Reviews/>}></Route>
          </Route>
        <Route path='*' element={<NotFound/>}/>
        </Routes>
        </Suspense>
    </div>
  );
};
