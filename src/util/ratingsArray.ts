import firebase from 'firebase/app';
import 'firebase/database';
import {IRating} from '../types';
import {db} from '../firebase/config';

export const ratingsArray = (
  ratings: firebase.database.DataSnapshot,
  movie: boolean
): IRating[] => {
  let ratingsArray: IRating[] = [];
  ratings.forEach((snapshot) => {
    ratingsArray.push({
      name: movie ? snapshot.val().displayName : snapshot.key!,
      score: movie ? snapshot.val().score : snapshot.val(),
    });
  });
  return ratingsArray;
};
