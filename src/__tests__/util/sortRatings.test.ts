import React from 'react'
import { sortRatings } from '../../util/sortRatings'

const a = {
  name: 'Adam',
  score: 8
}
const b = {
  name: 'Stephen',
  score: 10
}

describe('sort Ratings function', () => {
  it('sorts ratings',()=>{
    expect(sortRatings(a,b,'score',false)).toEqual(-2)
    expect(sortRatings(b,a,'score',false)).toEqual(2)
    expect(sortRatings(a,a,'score',false)).toEqual(0)
    expect(sortRatings(a,b,'score',true)).toEqual(2)
    expect(sortRatings(b,a,'score',true)).toEqual(-2)
    expect(sortRatings(a,a,'score',true)).toEqual(0)
  })
  it('sorts by names',()=>{
    expect(sortRatings(a,b,'name',false)).toEqual(1)
    expect(sortRatings(b,a,'name',false)).toEqual(-1)
    expect(sortRatings(a,a,'name',false)).toEqual(0)
    expect(sortRatings(a,b,'name',true)).toEqual(-1)
    expect(sortRatings(b,a,'name',true)).toEqual(1)
    expect(sortRatings(a,a,'name',true)).toEqual(0)
  })
})
