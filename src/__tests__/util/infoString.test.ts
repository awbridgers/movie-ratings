import React from 'react'
import { infoString } from '../../util/infoString'

const args = {
  date: new Date('01/01/01'),
  genres: [
    {
      name: 'action',
      id: 1
    },
    {
      name: 'mystery',
      id: 2
    }
  ],
  runtime: 169
}

describe('infoString function',()=>{
  it('returns the proper string',()=>{
    expect(infoString(args.date, args.genres, args.runtime)).toEqual(
      'January 1, 2001 | action, mystery | 2h 49m'
    )
  })
})