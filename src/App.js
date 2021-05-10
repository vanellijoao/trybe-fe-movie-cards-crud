import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import './App.css';

import { Header } from './components';
import { MovieList, NewMovie, MovieDetails, EditMovie, NotFound } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="movie-card-link">
        <Link to="movies/new">ADICIONAR CARTÃO</Link>
      </div>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route
          exact
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
