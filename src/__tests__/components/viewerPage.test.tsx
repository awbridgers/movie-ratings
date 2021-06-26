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
import ViewerPage from '../../components/viewerPage';
import selectEvent from 'react-select-event';

const props = {
  name: 'Nic Cage',
  ratings: [
    {name: 'Movie One', score: 10},
    {name: 'Movie Two', score: 5},
  ],
};

describe('ViewerPage component', () => {
  it('renders', () => {
    render(<ViewerPage {...props} />);
    expect(screen.getByText('Nic Cage\'s Ratings')).toBeTruthy();
  });
});