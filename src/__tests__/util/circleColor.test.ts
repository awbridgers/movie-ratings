import React from 'react'
import {circleColor} from '../../util/circleColor';

const bad = {
  path:'#FF0800',
  trail: '#420C09',
  star:'#FF0800'
}
const mediocre = {
  path: '#FFD300',
  trail: '#614710',
  star: '#E56717'
}
 const good = {
   path:'#03AC13',
   trail: '#003B00',
   star: '#FFD700'
 }

describe('Circle Color Funciton',()=>{
  it('returns the circle color for a good movie',()=>{
    expect(circleColor(10)).toEqual(good)
  })
  it('returns the color for a mediocre movie',()=>{
    expect(circleColor(6)).toEqual(mediocre);
  })
  it('returns the color for a bad movie',()=>{
    expect(circleColor(1)).toEqual(bad);
  })
})