import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {IMovie, IMovieData, IRating} from '../types';
import {getMovie} from '../util/getMovie';
import '../styles/moviePage.css';
import {infoString} from '../util/infoString';
import RatingCircle from './ratingCircle';
import {averageRating} from '../util/averageRating';
import {Table} from 'react-bootstrap';
import {sortRatings} from '../util/sortRatings';
import {getDate} from '../util/getDate';
import StarRatings from 'react-star-ratings';
import MovieDetails from './movieDetails';
import {useMediaQuery} from 'react-responsive';
import RatingTable from './ratingTable';


interface Props {
  title: string;
  id: string;
  date: Date;
  ratings: IRating[];
  cage: boolean
}

const Movie = ({title, id, date, ratings, cage}: Props) => {
  const [movieData, setMovieData] = useState<IMovieData>();
  
  const isMobile = useMediaQuery({maxWidth: 700});
  useEffect(() => {
    const getMovieData = async () => {
      const movie = await getMovie(id);
      setMovieData(movie);
    };
    getMovieData();
  }, []);
  

  if (movieData) {
    const details = (
      <MovieDetails
        date={date}
        ratings={ratings}
        vote_average={movieData.vote_average}
        vote_count={movieData.vote_count}
        overview={movieData.overview}
        budget={movieData.budget}
        revenue={movieData.revenue}
        cage = {cage}
      />
    );
    return (
      <div className="moviePage">
        <div
          className="info"
          style={{backgroundImage: `url(${movieData.backdgrop_path})`}}
        >
          <div className="overlay"></div>
          <div className="moviePoster">
            <img src={movieData.poster_path} />
          </div>
          <div className="movieInfo">
            <div className="titleDiv">
              <div className="movieTitle">{`${title} (${movieData.release_date.getFullYear()})`}
              <div className="movieTitleInfo">
                {movieData &&
                  infoString(
                    movieData.release_date,
                    movieData.genres,
                    movieData.runtime
                  )}
              </div>
              </div>
             
              <div className="tagline">{movieData.tagline}</div>
            </div>
            {!isMobile && details}
          </div>
        </div>
        {isMobile && details}
        <RatingTable title = 'Ratings' ratings = {ratings} isMobile ={isMobile} />
        </div>
    );
  }
  return (
    <div className="moviePage">
      <div className="info"></div>
    </div>
  );
};

export default Movie;
