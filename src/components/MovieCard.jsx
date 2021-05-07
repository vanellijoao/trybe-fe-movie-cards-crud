import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: {
      imagePath,
      title,
      subtitle,
      storyline } } = this.props;

    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt="Movie Poster" />
        <h1>
          { title }
        </h1>
        <h3>
          { subtitle }
        </h3>
        <p>
          { storyline }
        </p>
        <Link to="/DEPOISTROCAISSO"> Ver Detalhes </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
