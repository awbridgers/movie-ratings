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
import NavBar from '../../components/navBar';


describe('NavBar Component',()=>{
  it('renders without crashing',async ()=>{
    render(<Router><NavBar /></Router>);
    expect(await screen.findByText('Home')).toBeTruthy();
  })
})