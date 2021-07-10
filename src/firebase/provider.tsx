import {db} from './config';
import {createContext, useEffect, useState} from 'react';
import React from 'react';
import {ratingsArray} from '../util/ratingsArray';
import {IMovie} from '../types';

interface IProvider {
  children: React.ReactNode;
}

export const FirebaseContext = createContext<IMovie[]>([]);

const FirebaseProvider = ({children}: IProvider) => {
  const [movieArray, setMovieArray] = useState<IMovie[]>([]);
  useEffect(() => {
    const getData = async () => {
      let tempMovieArray: IMovie[] = [];
      try{
      const movies = await db.ref('movies').once('value');
      movies.forEach((snapshot) => {
        tempMovieArray.push({
          title: snapshot.key!,
          date: new Date(snapshot.val().date),
          ratings: ratingsArray(snapshot.child('/ratings')),
          id: snapshot.val().id,
          cage: snapshot.val().cage
        });
      });
      setMovieArray(tempMovieArray);
    }catch(e){
      console.log(e.message)
    }
    };
    getData();
  }, []);
  return (
    <FirebaseContext.Provider value={movieArray}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
