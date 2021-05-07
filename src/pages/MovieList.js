import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';

import { Loading, MovieCard } from '../components';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const { getMovies } = movieAPI;
    const moviesArray = await getMovies();
    console.log(moviesArray);
    this.setState({
      movies: moviesArray,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      // <Loading />
      <div data-testid="movie-list">
        { loading ? <Loading /> : movies
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
