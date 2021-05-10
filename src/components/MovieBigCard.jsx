import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import * as movieAPI from '../services/movieAPI';

class MovieBigCard extends Component {
  render() {
    const {
      movie: { id, storyline, imagePath, genre, rating, title, subtitle } } = this.props;
    const { deleteMovie } = this.props;

    return (
      <div data-testid="movie-details" className="big-card">
        <div className="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <div className="movie-card-link">
          <Link to="/"> VOLTAR </Link>
          <Link to={ `/movies/${id}/edit` }> EDITAR </Link>
          <Link onClick={ deleteMovie } to="/"> DELETAR </Link>
        </div>
      </div>
    );
  }
}

MovieBigCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    genre: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
  deleteMovie: PropTypes.func.isRequired,
};

export default MovieBigCard;
