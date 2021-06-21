import React, {useContext} from 'react';
import {screen, render, fireEvent, within} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../components/home';
import {FirebaseContext} from '../../firebase/provider';
import {BrowserRouter as Router} from 'react-router-dom';
import selectEvent from 'react-select-event'

const mockData = [
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
    ],
    cage: false,
    id: '333',
  },
];

describe('home page component', () => {
  beforeEach(() => {
    render(
      <FirebaseContext.Provider value={mockData}>
        <Router>
          <Home />
        </Router>
      </FirebaseContext.Provider>
    );
  });
  it('renders without crashing', () => {
    expect(screen.getByTestId('homePage')).toBeDefined();
  });
  it('filters out non-Cage films',()=>{
    expect(screen.getByTestId(mockData[0].title)).toBeTruthy();
    expect(screen.getByTestId(mockData[1].title)).toBeTruthy();
    fireEvent.click(screen.getByRole('switch'));
    expect(screen.queryByTestId(mockData[0].title)).toBeNull();
    expect(screen.getByTestId(mockData[1].title)).toBeTruthy();
  })
  it('sorts by date descending',()=>{
    const testArray = screen.getAllByTestId('movieCard');
    expect(within(testArray[0]).getByTestId('Third Movie')).toBeTruthy();
    expect(within(testArray[1]).getByTestId('Second Movie')).toBeTruthy();
    expect(within(testArray[2]).getByTestId('First Movie')).toBeTruthy();
  })
  it('sorts by date ascending',async ()=>{
    const drowDown = screen.getByLabelText('Sort')
    await selectEvent.select(drowDown,'Date (Ascending)')
    const testArray = screen.getAllByTestId('movieCard');
    expect(within(testArray[0]).getByTestId('First Movie')).toBeTruthy();
    expect(within(testArray[1]).getByTestId('Second Movie')).toBeTruthy();
    expect(within(testArray[2]).getByTestId('Third Movie')).toBeTruthy();
  })
  it('sorts by rating descending', async()=>{
    const drowDown = screen.getByLabelText('Sort')
    await selectEvent.select(drowDown,'Rating (Descending)')
    const testArray = screen.getAllByTestId('movieCard');
    expect(within(testArray[0]).getByTestId('Second Movie')).toBeTruthy();
    expect(within(testArray[1]).getByTestId('Third Movie')).toBeTruthy();
    expect(within(testArray[2]).getByTestId('First Movie')).toBeTruthy();
  })
  it('sorts by rating ascending', async()=>{
    const drowDown = screen.getByLabelText('Sort')
    await selectEvent.select(drowDown,'Rating (Ascending)')
    const testArray = screen.getAllByTestId('movieCard');
    expect(within(testArray[0]).getByTestId('First Movie')).toBeTruthy();
    expect(within(testArray[1]).getByTestId('Third Movie')).toBeTruthy();
    expect(within(testArray[2]).getByTestId('Second Movie')).toBeTruthy();
  })
  it('sorts by title descending', async()=>{
    const drowDown = screen.getByLabelText('Sort')
    await selectEvent.select(drowDown,'Title (Descending)')
    const testArray = screen.getAllByTestId('movieCard');
    expect(within(testArray[0]).getByTestId('Third Movie')).toBeTruthy();
    expect(within(testArray[1]).getByTestId('Second Movie')).toBeTruthy();
    expect(within(testArray[2]).getByTestId('First Movie')).toBeTruthy();
  })
  it('sorts by title ascending', async()=>{
    const drowDown = screen.getByLabelText('Sort')
    await selectEvent.select(drowDown,'Title (Ascending)')
    const testArray = screen.getAllByTestId('movieCard');
    expect(within(testArray[0]).getByTestId('First Movie')).toBeTruthy();
    expect(within(testArray[1]).getByTestId('Second Movie')).toBeTruthy();
    expect(within(testArray[2]).getByTestId('Third Movie')).toBeTruthy();
  })
});
