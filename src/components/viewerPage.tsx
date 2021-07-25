import React from 'react';
import {IRating} from '../types';
import RatingTable from './ratingTable';
import {useMediaQuery} from 'react-responsive'

interface IProps {
  ratings: IRating[];
  name: string;
}

const ViewerPage = ({ratings, name}: IProps) => {
  const isMobile = useMediaQuery({maxWidth:700})
  return (
    <div>
      <RatingTable movie title = {`${name}'s Ratings`} ratings={ratings} isMobile={isMobile} />
    </div>
  );
};

export default ViewerPage;
