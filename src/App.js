import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import { Header } from './components';
import { MovieList, NewMovie } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MovieList />
      <Route path="/movies/new" component={ NewMovie } />
    </BrowserRouter>
  );
}

export default App;
