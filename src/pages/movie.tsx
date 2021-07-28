import React, {useContext, useEffect, useState} from 'react';
import {IMovieData, IRating} from '../types';
import {getMovie} from '../util/getMovie';
import '../styles/moviePage.css';
import {infoString} from '../util/infoString';
import MovieDetails from '../components/movieDetails';
import {useMediaQuery} from 'react-responsive';
import RatingTable from '../components/ratingTable';
import '../styles/login.css';
import AddRating from '../components/addRating';
import { FirebaseContext } from '../firebase/provider';

interface Props {
  title: string;
  id: string;
  date: Date;
  ratings: IRating[];
  cage: boolean;
}

const Movie = ({title, id, date, ratings, cage}: Props) => {
  const [movieData, setMovieData] = useState<IMovieData>();
  const [addRating, setAddRating] = useState<boolean>(false);
  const [deleteRating, setDeleteRating] = useState<boolean>(false)
  const isMobile = useMediaQuery({maxWidth: 700});
  const userMovie = useContext(FirebaseContext).userMovie;
  const userScore = userMovie.find(x=>x.name===title);
  useEffect(() => {
    const getMovieData = async () => {
      const movie = await getMovie(id);
      setMovieData(movie);
    };
    getMovieData();
  }, [id]);

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
        cage={cage}
        addRating={() => setAddRating(true)}
        deleteRating={()=>{setDeleteRating(true); setAddRating(true)}}
        userRating={userScore}
      />
    );
    return (
      <div className="moviePage">
        {addRating && (
          <AddRating
            back={() => {setAddRating(false); setDeleteRating(false)}}
            title={title}
            userScore= {userScore}
            deleteRating = {deleteRating}
          />
        )}
        
        <div
          className="info"
          style={{backgroundImage: `url(${movieData.backdrop_path})`}}
        >
          <div className="overlay"></div>
          <div className="moviePoster">
            <img src={movieData.poster_path} alt="" />
          </div>
          <div className="movieInfo" data-testid="movieDetails">
            <div className="titleDiv">
              <div className="movieTitle">
                {`${movieData.title} (${movieData.release_date.getFullYear()})`}
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
        <RatingTable movie = {false} title="Ratings" ratings={ratings} isMobile={isMobile} />
      </div>
    );
  }
  return (
    <div className="moviePage" data-testid="loadingMoviePage">
      <div className="info"></div>
    </div>
  );
};

export default Movie;
