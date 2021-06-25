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
import MovieCard from '../../components/movieCard';
import {FirebaseContext} from '../../firebase/provider';
import {BrowserRouter as Router} from 'react-router-dom';
import {IMovieData} from '../../types';
import * as GetMovie from '../../util/getMovie';

const movieData: IMovieData = {
  budget: 69000000,
  genres: [{id: 1, name: 'action'}],
  imdb_id: '1234567',
  overview: 'this is a movie overview',
  poster_path: 'posterPath',
  backdrop_path: 'backdropPath',
  revenue: 10,
  release_date: new Date('05/06/07'),
  runtime: 69,
  title: 'Test Movie',
  vote_average: 7,
  vote_count: 100,
  tagline: 'movie tagline',
};
const props = {
  title: 'Test Movie',
  id: '123456',
  date: new Date('01/28/2006'),
  ratings: [
    {name: 'Bob', score: 8},
    {name: 'Joe', score: 6},
  ],
  cage: true,
};

describe('movieCard Component', () => {
  beforeEach(() => {
    jest
      .spyOn(GetMovie, 'getMovie')
      .mockReturnValue(Promise.resolve(movieData));
  });
  it('renders without crashing', async() => {
    render(
      <Router>
        <MovieCard {...props} />
      </Router>
    );
     const title = await screen.findByText(/Test Movie/);
     expect(title).toBeTruthy();
  });
});