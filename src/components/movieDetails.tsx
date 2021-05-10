import React from 'react'
import {IRating} from '../types';
import '../styles/moviePage.css';
import RatingCircle from './ratingCircle';
import {averageRating} from '../util/averageRating';
import {getDate} from '../util/getDate';
import {ImCross, ImCheckmark} from 'react-icons/im';
import '../styles/movieDetails.css'

interface Props {
  date: Date;
  ratings: IRating[];
  vote_average: number;
  vote_count: number;
  overview: string;
  budget: number;
  revenue: number;
  cage: boolean;
}

const MovieDetails = ({
  date,
  ratings,
  vote_average,
  vote_count,
  overview,
  budget,
  revenue,
  cage,
}: Props) => {
  return (
    <div className="detailsPage">
      <div className="movieRatings">
        <div className="ourRating">
          <div>Our Rating ({ratings.length})</div>
          <div className="ratingSize">
            <RatingCircle rating={averageRating(ratings)} />
          </div>
        </div>
        <div className="fanRating">
          <div>TMDB Rating ({vote_count.toLocaleString('en')})</div>
          <div className="ratingSize">
            <RatingCircle rating={vote_average} />
          </div>
        </div>
      </div>
      <div className="movieDetails">
        <div className="cage">
          <div className="heading">Nic Cage</div>
          <div className=" = detailBody">
            {cage ? (
              <ImCheckmark size={20} color="#03AC13" />
            ) : (
              <ImCross size={20} color="#FF0800" />
            )}
          </div>
        </div>
        <div className="overview">
          <div className="heading">Plot</div>
          <div className=" = detailBody">{overview}</div>
        </div>
        <div className="budget">
          <div className="heading">Budget</div>
          <div className=" = detailBody">${budget.toLocaleString('en')}</div>
        </div>
        <div className="revenue">
          <div className="heading">Revenue</div>
          <div className=" = detailBody">${revenue.toLocaleString('en')}</div>
        </div>
        <div className="revenue">
          <div className="heading">Date Watched</div>
          <div className=" = detailBody">{getDate(date)}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
