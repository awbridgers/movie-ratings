import React from 'react';
import {IViewer} from '../types';
import '../styles/App.css';
import {Card} from 'react-bootstrap';
import '../styles/viewerCard.css';
import {averageRating} from '../util/averageRating';
import {Link} from 'react-router-dom';

const ViewerCard = ({ratings, name, id}: IViewer) => {
  const highestRated = ratings.length
    ? ratings.reduce((accumulator, current) =>
        accumulator.score > current.score ? accumulator : current
      )
    : null;
  const lowestRated = ratings.length
    ? ratings.reduce((accumulator, current) =>
        accumulator.score < current.score ? accumulator : current
      )
    : null;
  return (
    <Card bg="dark" className="viewerCard" data-testid="viewerCard">
      <Card.Header className="viewerCardHeader">
        <Link to={`/viewers/${id}`}>{name}</Link>
      </Card.Header>
      <Card.Body className="viewerCardBody">
        <table className="viewerCardTable">
          <tbody>
            <tr>
              <th>Ratings</th>
              <td>{ratings.length}</td>
            </tr>
            <tr>
              <th>Average</th>
              <td>
                {ratings.length ? `${averageRating(ratings).toFixed(
                  1
                )}/10` : 'N/A'}
              </td>
            </tr>

            <tr data-testid="highest">
              <th>Highest</th>
              <td>
                {highestRated ? `${highestRated.name} (${highestRated.score}/10)`: 'N/A'}
              </td>
            </tr>
            <tr data-testid="lowest">
              <th>Lowest</th>
              <td>
              {lowestRated ? `${lowestRated.name} (${lowestRated.score}/10)`: 'N/A'}
              </td>
            </tr>
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
};

export default ViewerCard;
