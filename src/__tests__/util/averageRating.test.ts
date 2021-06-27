import React from 'react'
import {averageRating} from '../../util/averageRating';

const ratings = [
  {
    name: '',
    score: 10,
  },
  {
    name: '',
    score: 7.5
  },
  {
    name: '',
    score: 6.5
  }
]

describe('averageRating function',()=>{
  it('gets the average movie rating',()=>{
    expect(averageRating(ratings)).toEqual(8)
  })
})