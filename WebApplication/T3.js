
import React from 'react';
import './RecommendationComponent.css'; 

const RecommendationComponent = ({ recommendations }) => {
  return (
    <div className="recommendation-container">
      {recommendations.map((movie, index) => (
        <div key={index} className="movie-card">
          <img src={movie.cover || 'default-cover.jpg'} alt="Movie Cover" />
          <div className="movie-info">
            <p>{movie.name}</p>
            <div className="hover-info">
              <p>Genre: {movie.genre}</p>
              <p>Rating: {movie.rating}</p>
              <p>Director: {movie.director}</p>
              <p>Actors: {movie.actors.join(', ')}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendationComponent;

