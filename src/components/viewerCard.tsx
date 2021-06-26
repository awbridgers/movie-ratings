import React from 'react'
import {IRating} from '../types';
import '../styles/App.css';
import {Card} from 'react-bootstrap';
import '../styles/viewerCard.css';
import {averageRating} from '../util/averageRating';
import {useMediaQuery} from 'react-responsive';
import StarRatings from 'react-star-ratings';
import {Link } from 'react-router-dom'
interface IProps {
  ratings: IRating[];
  name: string;
}

const ViewerCard = ({ratings, name}: IProps) => {
  const isMobile = useMediaQuery({maxWidth: 700});
  const highestRated = ratings.sort((a, b) => b.score - a.score)[0];
  const lowestRated = ratings.sort((a, b) => a.score - b.score)[0];
  return (
    <Card bg="dark" className="viewerCard">
      <Card.Header className="viewerCardHeader"><Link to={`/viewers/${name}`}>{name}</Link></Card.Header>
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
