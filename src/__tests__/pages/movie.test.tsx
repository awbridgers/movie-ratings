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
import Movie from '../../pages/movie';
import {FirebaseContext} from '../../firebase/provider';
import {BrowserRouter as Router} from 'react-router-dom';
import {IMovieData, MovieContext} from '../../types';
import * as GetMovie from '../../util/getMovie';
import * as MediaQuery from 'react-responsive';
import {AuthContext} from '../../firebase/authProvider';
import firebase from 'firebase/app';

jest.mock('react-responsive');

const props = {
  title: 'Test Movie',
  id: '123456',
  date: new Date('01/28/2006'),
  ratings: [
    {name: 'Bob', score: 8, id: '12432412'},
    {name: 'Joe', score: 6, id: '2342'},
  ],
  cage: true,
};
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
const val: MovieContext = {
  movie: [],
  viewer: [],
  userMovie: [],
  displayName: 'TestName',
};
const renderComp = (FBuser: firebase.User | null, db: MovieContext) => {
  render(
    <AuthContext.Provider value={FBuser}>
      <FirebaseContext.Provider value={db}>
        <Movie {...props} />
      </FirebaseContext.Provider>
    </AuthContext.Provider>
  );
};

describe('Movie Component', () => {
  beforeEach(() => {
    jest.spyOn(MediaQuery, 'useMediaQuery').mockReturnValue(false);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('renders without crashing', async () => {
    render(<Movie {...props} />);
    expect(screen.getByTestId(/loadingMoviePage/)).toBeTruthy();
  });
  it('loads and displays the data', async () => {
    const spy = jest
      .spyOn(GetMovie, 'getMovie')
      .mockReturnValue(Promise.resolve(movieData));
    render(<Movie {...props} />);
    //
    await waitFor(() => expect(screen.getByText(/movie tagline/)).toBeTruthy());
  });
  it('displays the desktop version of the movie info', async () => {
    const spy = jest
      .spyOn(GetMovie, 'getMovie')
      .mockReturnValue(Promise.resolve(movieData));
    render(<Movie {...props} />);
    const parent = await screen.findByTestId('movieDetails');
    expect(within(parent).getByText('Plot')).toBeTruthy();
  });
  it('displays the mobile version of the movie info', async () => {
    jest.spyOn(MediaQuery, 'useMediaQuery').mockReturnValue(true);
    const spy = jest
      .spyOn(GetMovie, 'getMovie')
      .mockReturnValue(Promise.resolve(movieData));
    render(<Movie {...props} />);
    const parent = await screen.findByTestId('movieDetails');
    expect(within(parent).queryByText('Plot')).toBeFalsy();
    expect(screen.getByText('Plot')).toBeTruthy();
  });
  it('should add a rating', async () => {
    const spy = jest
      .spyOn(GetMovie, 'getMovie')
      .mockReturnValue(Promise.resolve(movieData));

    renderComp({} as firebase.User, val);
    const add = await screen.findByText('Add Rating');
    fireEvent.click(add);
    expect(
      screen.getByRole('heading', {name: 'Add Rating'})
    ).toBeInTheDocument();
    fireEvent.click(screen.getByText('Back'));
    expect(
      screen.queryByRole('heading', {name: 'Add Rating'})
    ).not.toBeInTheDocument();
  });
  it('should delete a rating', async () => {
    const spy = jest
      .spyOn(GetMovie, 'getMovie')
      .mockReturnValue(Promise.resolve(movieData));

    renderComp({} as firebase.User, {
      ...val,
      userMovie: [{name: 'Test Movie', score: 8, id: 'test-movie'}],
    });
    const add = await screen.findByText('Delete');
    fireEvent.click(add);
    expect(
      screen.getByRole('heading', {name: 'Delete Rating'})
    ).toBeInTheDocument();
    
  });
});
