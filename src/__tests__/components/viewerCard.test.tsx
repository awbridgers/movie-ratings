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
import ViewerCard from '../../components/viewerCard';
import * as MediaQuery from 'react-responsive';

jest.mock('react-responsive');

const props = {
  ratings: [
    {name: 'Movie One', score: 5, id: '1'},
    {name: 'Movie Two', score: 7, id: '2'},
    {name: 'Movie Three', score: 2, id: '3'},
  ],
  name: 'John',
  id: '123abc'
};

describe('viewerCard Component', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <ViewerCard {...props} />
      </Router>
    );
    expect(screen.getByText('Ratings')).toBeTruthy();
  });
  it('shows the highest and lowest rated movies', () => {
    render(
      <Router>
        <ViewerCard {...props} />
      </Router>
    );
    const highest = screen.getByTestId('highest');
    const lowest = screen.getByTestId('lowest');
    expect(within(highest).getByText('Movie Two (7/10)')).toBeTruthy();
    expect(within(lowest).getByText('Movie Three (2/10)')).toBeTruthy();
  });
  it('should show n/a for highest and lowest and avg rated if no ratings', () => {
    const newProps = {...props, ratings:[]}
    render(
      <Router>
        <ViewerCard {...newProps} />
      </Router>
    );
    expect(screen.getAllByText('N/A')).toHaveLength(3)
  })
  
});
