import React from 'react';
import {averageRating} from '../../util/averageRating';

const ratings = [
  {
    name: '',
    score: 10,
    id: '1',
  },
  {
    name: '',
    score: 7.5,
    id: '1',
  },
  {
    name: '',
    score: 6.5,
    id: '1',
  },
];

describe('averageRating function', () => {
  it('gets the average movie rating', () => {
    expect(averageRating(ratings)).toEqual(8);
  });
  it('returns 0 if no ratings',()=>{
    expect(averageRating([])).toEqual(0)
  })
});
