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
import RatingCircle from '../../components/ratingCircle';

describe('RatingCircle component',()=>{
  it('renders without crashing',()=>{
    render(<RatingCircle rating = {5} />)
    expect(screen.getByText('5.0')).toBeTruthy();
  })
  
})