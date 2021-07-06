import React from 'react';
import App from '../App';
import {render, screen, fireEvent} from '@testing-library/react';
import {FirebaseContext} from '../firebase/provider';

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
      {name: 'John', score: 8}
    ],
    cage: false,
    id: '333',
  },
];

describe('App component', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Home')).toBeTruthy();
  });
  it('loads the viewer Data', () => {
    render(
      <FirebaseContext.Provider value={movies}>
        <App />
      </FirebaseContext.Provider>
    );
    fireEvent.click(screen.getByText('Viewers'));
    expect(screen.getByText('Joe')).toBeTruthy();
    expect(screen.getByText('Bob')).toBeTruthy();
    expect(screen.getByText('John')).toBeTruthy();
  });
});
