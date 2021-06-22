import React, {useContext, useEffect} from 'react';
import {screen, render, fireEvent, within, waitFor, findByText, findByTestId, waitForElementToBeRemoved} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Movie from '../../components/movie';
import {FirebaseContext} from '../../firebase/provider';
import {BrowserRouter as Router} from 'react-router-dom';
import { IMovieData } from '../../types';
import * as GetMovie from '../../util/getMovie'
import * as MediaQuery from 'react-responsive'



jest.mock('react-responsive')


const props = {
  title: 'Test Movie',
  id: '123456',
  date: new Date('01/28/2006'),
  ratings: [{name:'Bob', score: 8}, {name:'Joe', score: 6}],
  cage: true
}
const movieData: IMovieData = {
  budget: 69000000,
  genres: [{id: 1, name: 'action'}],
  imdb_id: '1234567',
  overview: 'this is a movie overview',
  poster_path: 'posterPath',
  backdrop_path: 'backdropPath',
  revenue: 10,
  release_date: new Date('05/06/07'),
  runtime: 69,
  title: 'Test Movie',
  vote_average: 7,
  vote_count: 100,
  tagline: 'movie tagline'
}


describe('Movie Component',()=>{
  beforeEach(()=>{
    jest.spyOn(MediaQuery, 'useMediaQuery').mockReturnValue(false);
  })
  afterEach(()=>{
    jest.restoreAllMocks();
  })
  it('renders without crashing',async ()=>{
    render(<Movie {...props}/>)
    expect(screen.getByTestId(/loadingMoviePage/)).toBeTruthy();
  })
  it('loads and displays the data', async()=>{
   const spy = jest.spyOn(GetMovie, 'getMovie').mockReturnValue(Promise.resolve(movieData))
   render(<Movie {...props}/>)
   //
   await waitFor(()=>expect(screen.getByText(/movie tagline/)).toBeTruthy())
  })
  it('displays the desktop version of the movie info',async()=>{
    const spy = jest.spyOn(GetMovie, 'getMovie').mockReturnValue(Promise.resolve(movieData))
    render(<Movie {...props}/>)
    const parent = await screen.findByTestId('movieDetails');
    expect(within(parent).getByText('Plot')).toBeTruthy()
  })
  it('displays the mobile version of the movie info', async()=>{
    jest.spyOn(MediaQuery, 'useMediaQuery').mockReturnValue(true)
    const spy = jest.spyOn(GetMovie, 'getMovie').mockReturnValue(Promise.resolve(movieData))
    render(<Movie {...props}/>)
    const parent = await screen.findByTestId('movieDetails');
    expect(within(parent).queryByText('Plot')).toBeFalsy();
    expect(screen.getByText('Plot')).toBeTruthy();

  })
})