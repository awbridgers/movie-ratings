import React from 'react'
import {getDate} from '../../util/getDate'

describe('getDate function',()=>{
  it('returns the proper date',()=>{
    expect(getDate(new Date('01/01/01'))).toEqual(
      'January 1, 2001'
    )
  })
})