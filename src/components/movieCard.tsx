import React, {useEffect, useState} from 'react';
import {IMovie, IMovieData} from '../types';
import {Card, Button} from 'react-bootstrap';
import {getMovie} from '../util/getMovie';
import RatingCircle from './ratingCircle';
import {averageRating} from '../util/averageRating';
import {Link} from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import {ratingsArray} from '../util/ratingsArray';
import {circleColor} from '../util/circleColor';
import '../styles/movieCard.css'

interface Props extends IMovie {}

const MovieCard = ({title, id, date, ratings}: Props) => {
  const [movieData, setMovieData] = useState<IMovieData>();
  useEffect(() => {
    const getMovieData = async () => {
      const movie = await getMovie(id);
      setMovieData(movie);
    };
    getMovieData();
  }, []);
  const averageScore = averageRating(ratings);
  return (
    <Card bg="dark" className="movieCard">
      <div className="imageWrapper">
        <div className="image">
          <img className="cardImage" src={movieData?.poster_path} />
        </div>
      </div>
      <div className="bodyWrapper">
        <div className="body">
          <div className="title">
            <Link to={`/movies/${title.replace(/ /g, '-')}`}>
              <Card.Title>{movieData?.title}</Card.Title>
            </Link>
          </div>
          <div className="averageRating">
            <div className="stars">
              <StarRatings
                rating={averageScore / 10}
                starRatedColor="rgb(255,223,0)"
                numberOfStars={1}
                starEmptyColor={'rgb(30,30,30)'}
                starDimension="50px"
                starSpacing="0px"
              />
            </div>
            <div className="score">{averageScore.toFixed(1)}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
