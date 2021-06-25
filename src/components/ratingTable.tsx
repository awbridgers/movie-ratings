import React, { useState } from 'react';
import {Table} from 'react-bootstrap'
import StarRatings from 'react-star-ratings';
import { IRating } from '../types';
import { sortRatings } from '../util/sortRatings';
import '../styles/ratingsTable.css'


interface IProps {
  ratings: IRating[];
  isMobile: boolean;
  title: string;
}

const RatingTable = ({ratings, isMobile, title}:IProps) => {
  const [sortBest, setSortBest] = useState<boolean>(true);
  const [sortType, setSortType] = useState<'name' | 'score'>('score');
  const changeSort = (type: 'name' | 'score') => {
    if (type === sortType) {
      setSortBest(!sortBest);
    } else {
      setSortType(type);
    }
  };
  return (
    <div className = 'ratingTable'>
      <div className = 'ratingTitle'>{title}</div>
    <Table size="sm" hover variant="dark" className="tableOfRatings">
      <tbody>
        <tr>
          <th onClick={() => changeSort('name')}>Name</th>
          <th onClick={() => changeSort('score')}>Score</th>
        </tr>
        {ratings
          .sort((a, b) => sortRatings(a, b, sortType, sortBest))
          .map((rating, i) => (
            <tr key={i}>
              <td data-testid = 'ratingName'>{rating.name}</td>
              <td>
                <StarRatings
                  rating={rating.score / 2}
                  starRatedColor="rgb(255,223,0)"
                  starEmptyColor="rgb(30,30,30)"
                  starDimension={!isMobile ? '35px' : '30px'}
                  starSpacing={!isMobile ? '2px' : '0px'}
                  name = 'starRating'
                />
                {` ${rating.score.toFixed(1)}/10`}
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
    </div>
  );
};

export default RatingTable;
