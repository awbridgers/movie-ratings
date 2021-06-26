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
import {BrowserRouter as Router} from 'react-router-dom'
import ViewerCard from '../../components/viewerCard';

const props = {
  ratings: [
    {name: 'Movie One', score: 5},
    {name: 'Movie Two', score: 7},
    {name: 'Movie Three', score: 2}
  ],
  name: 'John'
}

describe('viewerCard Component',()=>{
  it('renders without crashing',()=>{
    render(<ViewerCard {...props} />)
    expect(screen.getByText('Movies Watched')).toBeTruthy();
  })
})