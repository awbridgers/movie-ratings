import React, {useContext} from 'react';
import FirebaseProvider, {FirebaseContext} from '../../firebase/provider';
import {render, screen, waitFor} from '@testing-library/react';
import firebase from 'firebase/app';
import App from '../../App';
import db from '../../firebase/config';

window.scrollTo = jest.fn();
const mockOnce = jest.fn();

const mockData = Promise.resolve([
  {
    key: 'Test Movie',
    child: ()=>{
      return [
        {
          key: 'Nic Cage',
          val: ()=>10
        }
      ]
    },
    val: () => ({
      date: '01/01/01',
      cage: true,
      id: 123456,
    }),
  },
])

jest.mock('../../firebase/config', () => ({
  ref: () => ({
    once: mockOnce
  }),
}));

const Consumer = () => {
  const test = useContext(FirebaseContext);
  return <div>{test.length === 0 && 'Empty'}</div>;
};

describe('FirebaseProvider', () => {
  beforeEach(()=>{
    mockOnce.mockReturnValue(mockData)
  })
  it('shows the default value of empty array', () => {
    render(
      <FirebaseProvider>
        <Consumer />
      </FirebaseProvider>
    );
    expect(screen.getByText('Empty')).toBeTruthy();
  });
  it('loads the movie data into the context', async () => {
    render(
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    );
    await waitFor(()=>expect(screen.getByTestId('Test Movie')).toBeTruthy())
  });
  it('throws an error if there is an error',async()=>{
    mockOnce.mockReturnValue('test')
    const log = jest.spyOn(console, 'log');
    render(
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    );
    await waitFor(()=>expect(log).toHaveBeenNthCalledWith(1,'movies.forEach is not a function'))
  })
});
