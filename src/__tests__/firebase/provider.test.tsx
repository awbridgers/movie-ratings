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
  it('shows the default value of empty array', async() => {
    render(
      <FirebaseProvider>
        <Consumer />
      </FirebaseProvider>
    );
    expect(await screen.findByText('Empty')).toBeTruthy();
  });
  it('loads the movie data into the context', async () => {
    render(
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    );
    const test = await screen.findByTestId('Test Movie')
    expect(test).toBeTruthy();
  });
  it('throws an error if there is an error',async()=>{
    mockOnce.mockReturnValue('test')
    const log = jest.spyOn(console, 'log');
    render(
      <FirebaseProvider>
        <div></div>
      </FirebaseProvider>
    );
    await waitFor(()=>expect(log).toHaveBeenNthCalledWith(1,'movies.forEach is not a function'))
  })
});
