import React from 'react'
import { ratingsArray } from '../../util/ratingsArray'
import firebase from 'firebase/app'
import 'firebase/database'

const movieRatings = [
  {
    key: 'Adam',
    val:()=> ({
      displayName: 'Adam',
      score: 7
    })
  } ,
  {
    key: 'Stephen',
    val:()=> ({
      displayName: 'Stephen',
      score: 8
    })
  } 
] as any as firebase.database.DataSnapshot

const userRatings = [
  {
    key: 'Test Movie',
    val:()=>8
  }
] as any as firebase.database.DataSnapshot

describe('ratingsArray Function', () => {
  it('gets the ratings array for a movie',()=>{
    expect(ratingsArray(movieRatings, true)).toEqual([
      {
        name: 'Adam',
        score: 7,
        id: 'Adam'
      },
      {
        name: 'Stephen',
        score: 8,
        id: 'Stephen'
      }
    ])
  })
  it('should get the ratings array for user ratings', () => {
    expect(ratingsArray(userRatings, false)).toEqual([{
      name: 'Test Movie',
      score: 8,
      id: 'Test-Movie'
    }])
  })
  
})
