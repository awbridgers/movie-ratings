import React from 'react'
import { getMovie } from '../../util/getMovie';

const movieData = {
  budget: 69000000,
  genres: [{id: 1, name: 'action'}],
  imdb_id: '1234567',
  overview: 'this is a movie overview',
  poster_path: 'posterPath',
  backdrop_path: 'backdropPath',
  revenue: 10,
  release_date: '05/06/07',
  runtime: 69,
  title: 'Test Movie',
  vote_average: 7,
  vote_count: 100,
  tagline: 'movie tagline'
}

const oldFetch = global.fetch;

describe('getMovie Function',()=>{
  beforeEach(()=>{
    global.fetch = jest.fn().mockReturnValue(Promise.resolve({
      json: ()=>Promise.resolve(movieData)
    }))
  })
  afterEach(()=>{
    global.fetch = oldFetch;
  })
  it('gets the movie data',async()=>{
    expect(await getMovie('12345')).toEqual(
      {
        ...movieData,
        poster_path: `https://image.tmdb.org/t/p/w500posterPath`,
        backdrop_path: `https://image.tmdb.org/t/p/w1280backdropPath`,
        release_date: new Date('05/06/07')
      })
  })
})