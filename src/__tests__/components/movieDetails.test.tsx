import React, {useContext, useEffect} from 'react';
import {
  screen,
  render,
  fireEvent,
  within,
  waitFor,
  findByText,
  findByTestId,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieDetails from '../../components/movieDetails';

const props = {
  date: new Date('01/01/01'),
  ratings:[{name:'joe', score: 5}, {name:'bob', score: 7}],
  vote_average: 6,
  vote_count: 20,
  overview: 'movie overview',
  budget: 123456,
  revenue: 123456,
  cage: true
}

describe('movieDetails component',()=>{
  it('renders the check mark if nic cage is in the movie',()=>{
    render(<MovieDetails {...props} />)
    expect(screen.getByTestId(/check/)).toBeTruthy();
  })
  it('renders the x if nic cage is not in the movie',()=>{
    const noCage = {...props, cage: false}
    render(<MovieDetails {...noCage} />);
    expect(screen.getByTestId(/x/)).toBeTruthy();
  })
})