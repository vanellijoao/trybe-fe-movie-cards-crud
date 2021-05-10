import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading, MovieBigCard } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    const { match: { params: { id } } } = this.props;

    this.state = {
      movieId: id,
      movie: [],
      loading: true,
    };

    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovieById();
  }

  async deleteMovie() {
    const { movieId } = this.state;
    console.log(movieId);
    await movieAPI.deleteMovie(movieId);
  }

  async fetchMovieById() {
    const { movieId } = this.state;
    const { getMovie } = movieAPI;
    const movie = await getMovie(movieId);
    this.setState({
      movie,
      loading: false,
    });
  }

  render() {
    const { loading, movie } = this.state;

    return (
      <div>
        { loading
          ? <Loading />
          : <MovieBigCard movie={ movie } deleteMovie={ this.deleteMovie } /> }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
