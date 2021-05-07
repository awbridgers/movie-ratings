import firebase from 'firebase/app'
import 'firebase/database';
import { IRating } from '../types';



export const ratingsArray = (ratings: firebase.database.DataSnapshot):IRating[]=>{
  let ratingsArray:IRating[] = [];
  ratings.forEach((snapshot)=>{
    ratingsArray.push({
      name: snapshot.key!,
      score: snapshot.val()
    })
  })
  return ratingsArray;
}