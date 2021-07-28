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
import {BrowserRouter as Router} from 'react-router-dom';
import ViewerHome from '../../pages/viewerHome';
import selectEvent from 'react-select-event';

const props = {
  viewerData: [
    {
      name: 'John Collins',
      ratings: [
        {name: 'Movie One', score: 7},
        {name: 'Movie Two', score: 5},
      ],
    },
    {
      name: 'Aaron Rodgers',
      ratings: [
        {name: 'Movie One', score: 5},
        {name: 'Movie Two', score: 9},
      ],
    },
    {
      name: 'Zack Synder',
      ratings: [
        {name: 'Movie One', score: 10},
        {name: 'Movie Two', score: 8},
      ],
    },
  ],
};

describe('ViewerHome Component', () => {
  beforeEach(() => {
    render(
      <Router>
        <ViewerHome {...props} />
      </Router>
    );
  });
  it('renders', () => {
    expect(screen.getByText('John Collins')).toBeTruthy();
  });
  it('sorts by name descending (default sort)',()=>{
   const cards = screen.getAllByTestId('viewerCard');
   expect(within(cards[2]).getByText('Aaron Rodgers')).toBeTruthy();
   expect(within(cards[1]).getByText('John Collins')).toBeTruthy();
   expect(within(cards[0]).getByText('Zack Synder')).toBeTruthy();
  })
  it('sorts by name ascending', async()=>{
    const dropDown = screen.getByLabelText('Sort');
    await selectEvent.select(dropDown, 'Name (Ascending)');
    const cards = screen.getAllByTestId('viewerCard');
    expect(within(cards[0]).getByText('Aaron Rodgers')).toBeTruthy();
    expect(within(cards[1]).getByText('John Collins')).toBeTruthy();
    expect(within(cards[2]).getByText('Zack Synder')).toBeTruthy();
  })
  it('sorts by rating descending', async()=>{
    const dropDown = screen.getByLabelText('Sort');
    await selectEvent.select(dropDown, 'Rating (Descending)');
    const cards = screen.getAllByTestId('viewerCard');
    expect(within(cards[1]).getByText('Aaron Rodgers')).toBeTruthy();
    expect(within(cards[2]).getByText('John Collins')).toBeTruthy();
    expect(within(cards[0]).getByText('Zack Synder')).toBeTruthy();
  })
  it('sorts by rating ascending', async()=>{
    const dropDown = screen.getByLabelText('Sort');
    await selectEvent.select(dropDown, 'Rating (Ascending)');
    const cards = screen.getAllByTestId('viewerCard');
    expect(within(cards[1]).getByText('Aaron Rodgers')).toBeTruthy();
    expect(within(cards[0]).getByText('John Collins')).toBeTruthy();
    expect(within(cards[2]).getByText('Zack Synder')).toBeTruthy();
  })
});
