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
import {BrowserRouter as Router, Link} from 'react-router-dom'
import ScrollToTop from '../../components/scrollToTop';

window.scrollTo = jest.fn();

describe('ScrollToTop Component',()=>{
  beforeEach(()=>{
    jest.clearAllMocks();
  })
  it('renders without crashing', async ()=>{
    render(<Router><ScrollToTop/><Link to = 'test'>Click Me!</Link></Router>);
    expect(screen.getByText('Click Me!')).toBeTruthy();
  })
  it('scrolls to the top on path change',async()=>{
    render(<Router><ScrollToTop/><Link to = 'test'>Click Me!</Link></Router>);
    fireEvent.click(screen.getByText('Click Me!'));
    await waitFor(()=>expect(window.scrollTo).toHaveBeenCalledTimes(2));
  })
})