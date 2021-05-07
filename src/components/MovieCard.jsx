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
      <div data-testid="movie-card" className="movie-card">
        <div className="movie-card-details">
          <img src={ imagePath } alt="Movie Poster" />
          <h2>
            { title }
          </h2>
          <h4>
            { subtitle }
          </h4>
          <p>
            { storyline }
          </p>
        </div>
        <div className="movie-card-link">
          <Link to="/DEPOISTROCAISSO"> Ver Detalhes </Link>
        </div>
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
