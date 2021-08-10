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
import AuthProvider, {AuthContext} from '../../firebase/authProvider';
import firebase from 'firebase/app';

const props = {
  date: new Date('01/01/01'),
  ratings: [
    {name: 'joe', score: 5, id: '1'},
    {name: 'bob', score: 7, id: '2'},
  ],
  vote_average: 6,
  vote_count: 20,
  overview: 'movie overview',
  budget: 123456,
  revenue: 123456,
  cage: true,
  addRating: jest.fn(),
  deleteRating: jest.fn(),
  userRating: undefined,
};
const user = {uid: 'randomUid'} as firebase.User;
describe('movieDetails component', () => {
  it('renders the check mark if nic cage is in the movie', () => {
    render(<MovieDetails {...props} />);
    expect(screen.getByTestId(/check/)).toBeTruthy();
  });
  it('renders the x if nic cage is not in the movie', () => {
    const noCage = {...props, cage: false};
    render(<MovieDetails {...noCage} />);
    expect(screen.getByTestId(/x/)).toBeTruthy();
  });
  it('renders the user rating if the user is logged in', () => {
    render(
      <AuthContext.Provider value={user}>
        <MovieDetails {...props} />
      </AuthContext.Provider>
    );
    expect(screen.getByText(/Your Rating/)).toBeTruthy();
  });
  it('does not render your rating if no user logged in', () => {
    render(
      <AuthContext.Provider value={null}>
        <MovieDetails {...props} />
      </AuthContext.Provider>
    );
    expect(screen.queryByText(/Your Rating/)).toBeFalsy();
  });
  it('renders the add rating button if a user is logged in, but has no rating', () => {
    render(
      <AuthContext.Provider value={user}>
        <MovieDetails {...props} />
      </AuthContext.Provider>
    );
    expect(screen.getByText(/Add Rating/)).toBeTruthy();
    fireEvent.click(screen.getByText(/Add Rating/));
    expect(props.addRating).toHaveBeenCalled();
  });
  it('renders your rating and change/delete if it exists', () => {
    const newProps = {
      ...props,
      userRating: {score: 9, name: 'test', id: 'test'},
    };
    render(
      <AuthContext.Provider value={user}>
        <MovieDetails {...newProps} />
      </AuthContext.Provider>
    );
    expect(screen.getByText(/9\/10/)).toBeTruthy();
    expect(screen.getByText(/Change/)).toBeTruthy();
    expect(screen.getByText(/Delete/)).toBeTruthy();
  });
  it('should run change and delete function when pressed', () => {
    const newProps = {
      ...props,
      userRating: {score: 9, name: 'test', id: 'test'},
    };
    render(
      <AuthContext.Provider value={user}>
        <MovieDetails {...newProps} />
      </AuthContext.Provider>
    );
    const change = screen.getByText(/Change/);
    const del = screen.getByText(/Delete/);
    fireEvent.click(change);
    fireEvent.click(del);
    expect(props.addRating).toHaveBeenCalled();
    expect(props.deleteRating).toHaveBeenCalled();
  })
  
});
