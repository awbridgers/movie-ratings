import React from 'react';
import {sortMovies} from '../../util/sortMovies';
import {sortViewers} from '../../util/sortMovies';

const a = {
  title: 'First Movie',
  date: new Date('01/01/01'),
  ratings: [
    {name: 'Bob', score: 1},
    {name: 'Joe', score: 10},
  ],
  cage: false,
  id: '1111',
};
const b = {
  title: 'Second Movie',
  date: new Date('02/02/02'),
  ratings: [
    {name: 'Bob', score: 10},
    {name: 'Joe', score: 10},
  ],
  cage: true,
  id: '2222',
};
const c = {
  name: 'Adam',
  ratings: [{
    name: 'Movie One', score: 5
  },
  {
    name: 'Movie Two', score: 8
  }]
}
const d = {
  name: 'Stephen',
  ratings: [
    {
      name: 'Movie One', score: 10
    },
    {
      name: 'Movie Two', score: 9
    }
  ]
}
const time = b.date.getTime() - a.date.getTime();

describe('sortMovies Function', () => {
  it('sorts the movies by rating', () => {
    expect(sortMovies(a,b,{value:'rateA'})).toEqual(-4.5);
    expect(sortMovies(b,a,{value:'rateA'})).toEqual(4.5);
    expect(sortMovies(a,a,{value:'rateA'})).toEqual(0);
    expect(sortMovies(a,b,{value:'rateD'})).toEqual(4.5);
    expect(sortMovies(b,a,{value:'rateD'})).toEqual(-4.5);
    expect(sortMovies(a,a,{value:'rateD'})).toEqual(0);
  });
  it('sorts the movies by title',()=>{
    expect(sortMovies(a,b,{value:'titleA'})).toEqual(-1);
    expect(sortMovies(b,a,{value:'titleA'})).toEqual(1);
    expect(sortMovies(a,a,{value:'titleA'})).toEqual(0);
    expect(sortMovies(a,b,{value:'titleD'})).toEqual(1);
    expect(sortMovies(b,a,{value:'titleD'})).toEqual(-1);
    expect(sortMovies(a,a,{value:'titleD'})).toEqual(0);
  })
  it('sorts the movies by date',()=>{
    expect(sortMovies(a,b,{value:'dateA'})).toEqual(-time);
    expect(sortMovies(b,a,{value:'dateA'})).toEqual(time);
    expect(sortMovies(a,a,{value:'dateA'})).toEqual(0);
    expect(sortMovies(a,b,{value:'dateD'})).toEqual(time);
    expect(sortMovies(b,a,{value:'dateD'})).toEqual(-time);
    expect(sortMovies(a,a,{value:'dateD'})).toEqual(0);
  })
  it('default sorts by Date',()=>{
    expect(sortMovies(a,b,{value:'date'})).toEqual(time);
    expect(sortMovies(b,a,{value:'date'})).toEqual(-time);
    expect(sortMovies(a,a,{value:'date'})).toEqual(0);
  })
});
describe('SortViewers function',()=>{
  it('sorts Viewers by name',()=>{
    expect(sortViewers(c,d,{value:'titleA'})).toEqual(-1)
    expect(sortViewers(d,c,{value:'titleA'})).toEqual(1)
    expect(sortViewers(c,c,{value:'titleA'})).toEqual(0)
    expect(sortViewers(c,d,{value:'titleD'})).toEqual(1)
    expect(sortViewers(d,c,{value:'titleD'})).toEqual(-1)
    expect(sortViewers(c,c,{value:'titleD'})).toEqual(0)
  })
  it('sorts the viewers by rating',()=>{
    expect(sortViewers(c,d,{value:'rateA'})).toEqual(-3)
    expect(sortViewers(d,c,{value:'rateA'})).toEqual(3)
    expect(sortViewers(c,c,{value:'rateA'})).toEqual(0)
    expect(sortViewers(c,d,{value:'rateD'})).toEqual(3)
    expect(sortViewers(d,c,{value:'rateD'})).toEqual(-3)
    expect(sortViewers(c,c,{value:'rateD'})).toEqual(0)
  })
  it('default sorts Viewers by name',()=>{
    expect(sortViewers(c,d,{value:'t'})).toEqual(-1)
    expect(sortViewers(d,c,{value:'title'})).toEqual(1)
    expect(sortViewers(c,c,{value:'title'})).toEqual(0)
  })
})
