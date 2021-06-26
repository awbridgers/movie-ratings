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
    {name: 'Movie One', score: 5},
    {name: 'Movie Two', score: 7},
    {name: 'Movie Three', score: 2},
  ],
  name: 'John',
};

describe('viewerCard Component', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <ViewerCard {...props} />
      </Router>
    );
    expect(screen.getByText('Movies Watched:')).toBeTruthy();
  });
  it('renders the mobile view', () => {
    jest.spyOn(MediaQuery, 'useMediaQuery').mockReturnValue(true);
    const {container} = render(
      <Router>
        <ViewerCard {...props} />
      </Router>
    );
    const svg = container.querySelector('[class = "widget-svg"]');
    expect(svg).toHaveStyle(
      'width: 15px; height: 15px; transition: transform .2s ease-in-out;'
    );
  });
  it('renders the desktop view', () => {
    jest.spyOn(MediaQuery, 'useMediaQuery').mockReturnValue(false);
    const {container} = render(
      <Router>
        <ViewerCard {...props} />
      </Router>
    );
    const svg = container.querySelector('[class = "widget-svg"]');
    expect(svg).toHaveStyle(
      'width: 22px; height: 22px; transition: transform .2s ease-in-out;'
    );
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
});
