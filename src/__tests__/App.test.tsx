import React from 'react';
import App from '../App';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import {FirebaseContext} from '../firebase/provider';
import {auth} from '../firebase/config';
import firebase from 'firebase/app';
import {AuthContext} from '../firebase/authProvider';
import {IMovie, IMovieData, IViewer, MovieContext} from '../types';
import * as getMovie from '../util/getMovie';

window.scrollTo = jest.fn();

const movieInfo: IMovieData = {
  budget: 100,
  genres: [{name: 'fantasy', id: 1}],
  imdb_id: '1234',
  overview: 'movie',
  poster_path: `https://image.tmdb.org/t/p/w500$`,
  backdrop_path: `https://image.tmdb.org/t/p/w1280`,
  revenue: 5,
  runtime: 5,
  title: 'Movie Test',
  vote_average: 5,
  vote_count: 5,
  tagline: 'stuff',
  release_date: new Date('01/01/01'),
};
const movies: IMovie[] = [
  {
    title: 'Test Movie',
    date: new Date('01/01/01'),
    id: '1234',
    cage: false,
    ratings: [{name: 'adam', score: 8, id: '123456'}],
  },
];
const viewers: IViewer[] = [
  {
    name: 'Adam',
    ratings: [{name: 'Test Movie', score: 10, id:'1235'}],
    id: '123456'
  }
]

const val: MovieContext = {
  movie: [...movies],
  viewer: [...viewers],
  userMovie: [],
  displayName: 'TestName',
};
const renderComp = (user: firebase.User | null) => {
  render(
    <AuthContext.Provider value={user}>
      <FirebaseContext.Provider value={val}>
        <App />
      </FirebaseContext.Provider>
    </AuthContext.Provider>
  );
};

describe('App Comp', () => {
  beforeEach(() => {
    jest.spyOn(getMovie, 'getMovie').mockResolvedValue(movieInfo);
  });
  it('should open the sign in screen', async () => {
    renderComp(null);
    const button = await screen.findByText('Sign In');
    fireEvent.click(button);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });
  it('should run the signout function', async () => {
    renderComp({uid: '1234567'} as firebase.User);
    const spy = jest.spyOn(auth, 'signOut');
    const name = await screen.findByText('TestName');
    fireEvent.click(name);
    fireEvent.click(screen.getByText('Sign Out'));

    await waitFor(() => expect(spy).toHaveBeenCalled());
    await waitFor(() =>
      expect(screen.getByText('Sign Out Successful!')).toBeInTheDocument()
    );
    fireEvent.click(screen.getByRole('button', {name: 'Close'}));
    expect(screen.queryByText('Sign Out Successful!')).not.toBeInTheDocument();
  });
  it('should catch error on sign out', async () => {
    renderComp({uid: '1234567'} as firebase.User);
    const spy = jest
      .spyOn(auth, 'signOut')
      .mockRejectedValueOnce({message: 'error'});
    const log = jest.spyOn(console, 'log');
    const name = await screen.findByText('TestName');
    fireEvent.click(name);
    fireEvent.click(screen.getByText('Sign Out'));

    await waitFor(() => expect(log).toHaveBeenCalledWith('error'));
  });
  it('runs the back function', async () => {
    renderComp(null);
    const button = await screen.findByText('Sign In');
    fireEvent.click(button);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Back'));
    expect(screen.queryByLabelText('Email')).not.toBeInTheDocument();
  });
  it('should map the movies', async () => {
    renderComp(null);
    waitFor(() => expect(screen.getByText('Movie-Test')).toBeInTheDocument());
  });
  it('should map the viewers', async () => {
    renderComp(null);
    const button = await screen.findByText('Viewers');
    fireEvent.click(button);
    await waitFor(() => {
      expect(screen.getByText('Adam')).toBeInTheDocument()
    });
  });
});
