import React from 'react'
import { ratingsArray } from '../../util/ratingsArray'
import firebase from 'firebase/app'
import 'firebase/database'

const ratings = [
  {
    key: 'Adam',
    val:()=> 7
  } ,
  {
    key: 'Stephen',
    val:()=> 8
  } 
] as any as firebase.database.DataSnapshot

describe('ratingsArray Function', () => {
  it('gets the ratings array',()=>{
    expect(ratingsArray(ratings)).toEqual([
      {
        name: 'Adam',
        score: 7
      },
      {
        name: 'Stephen',
        score: 8
      }
    ])
  })
})
