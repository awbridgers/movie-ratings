import React from 'react';
import App from '../App';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import {FirebaseContext} from '../firebase/provider';
import {auth} from '../firebase/config';
import firebase from 'firebase/app';
import {AuthContext} from '../firebase/authProvider';
import {MovieContext} from '../types';

window.scrollTo = jest.fn();

const movies = [
  {
    title: 'First Movie',
    date: new Date('01/01/01'),
    ratings: [
      {name: 'Bob', score: 1},
      {name: 'Joe', score: 10},
    ],
    cage: false,
    id: '1111',
  },
  {
    title: 'Second Movie',
    date: new Date('02/02/02'),
    ratings: [
      {name: 'Bob', score: 10},
      {name: 'Joe', score: 10},
    ],
    cage: true,
    id: '2222',
  },
  {
    title: 'Third Movie',
    date: new Date('03/03/03'),
    ratings: [
      {name: 'Bob', score: 8},
      {name: 'Joe', score: 8},
      {name: 'John', score: 8},
    ],
    cage: false,
    id: '333',
  },
];
const val: MovieContext = {
  movie: [],
  viewer: [],
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
  it('should open the sign in screen', async () => {
    renderComp(null);
    fireEvent.click(screen.getByText('Sign In'));
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });
  it('should run the signout function', async () => {
    renderComp({uid:'1234567'} as firebase.User);
    const spy = jest.spyOn(auth, 'signOut')
    fireEvent.click(screen.getByText('TestName'));
    fireEvent.click(screen.getByText('Sign Out'));
    
    await waitFor(()=>expect(spy).toHaveBeenCalled())
  });
  it('should catch error on sign out', async () => {
    renderComp({uid:'1234567'} as firebase.User);
    const spy = jest.spyOn(auth, 'signOut').mockRejectedValueOnce({message:'error'})
    const log = jest.spyOn(console, 'log');
    fireEvent.click(screen.getByText('TestName'));
    fireEvent.click(screen.getByText('Sign Out'));
    
    await waitFor(()=>expect(log).toHaveBeenCalledWith('error'))
  })
  
});
