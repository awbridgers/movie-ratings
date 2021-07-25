import React from 'react'
import {IViewer} from '../types';
import '../styles/App.css';
import {Card} from 'react-bootstrap';
import '../styles/viewerCard.css';
import {averageRating} from '../util/averageRating';
import {useMediaQuery} from 'react-responsive';
import StarRatings from 'react-star-ratings';
import {Link } from 'react-router-dom'


const ViewerCard = ({ratings, name, id}: IViewer) => {
  const isMobile = useMediaQuery({maxWidth: 700});
  const highestRated = ratings.reduce((accumulator, current)=>accumulator.score > current.score ? accumulator : current);
  const lowestRated = ratings.reduce((accumulator, current)=>accumulator.score < current.score ? accumulator : current);
  return (
    <Card bg="dark" className="viewerCard" data-testid = 'viewerCard'>
      <Card.Header className="viewerCardHeader"><Link to={`/viewers/${id}`}>{name}</Link></Card.Header>
      <Card.Body className="viewerCardBody">
        <table className="viewerCardTable">
          <tbody>
            <tr>
              <th>Movies Watched:</th>
              <td>{ratings.length}</td>
            </tr>
            <tr>
              <th>Average Rating:</th>
              <td className = 'avgRating'>
              
                <StarRatings
                  rating={averageRating(ratings) / 2}
                  starRatedColor="rgb(255,223,0)"
                  starEmptyColor="rgb(30,30,30)"
                  starDimension={!isMobile ? '22px' : '15px'}
                  starSpacing={!isMobile ? '0px' : '0px'}
                />
                 <div id = 'ratingNumber'>{` ${averageRating(ratings).toFixed(1)}/10`}</div>
              </td>
            </tr>

            <tr data-testid = 'highest'>
              <th>Highest Rated:</th>
              <td>
                {highestRated.name} ({highestRated.score}/10)
              </td>
            </tr>
            <tr data-testid = 'lowest'>
              <th>Lowest Rated:</th>
              <td>
                {lowestRated.name} ({lowestRated.score}/10)
              </td>
            </tr>
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
};

export default ViewerCard;
