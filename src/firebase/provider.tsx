import {db} from './config';
import {createContext, useContext, useEffect, useState} from 'react';
import React from 'react';
import {ratingsArray} from '../util/ratingsArray';
import {IMovie, IRating, IViewer} from '../types';
import {AuthContext} from './authProvider';

interface IProvider {
  children: React.ReactNode;
}

export const FirebaseContext = createContext<{
  movie: IMovie[];
  viewer: IViewer[];
  userMovie: IRating[];
}>({movie: [], viewer: [], userMovie: []});

const FirebaseProvider = ({children}: IProvider) => {
  const [movieArray, setMovieArray] = useState<IMovie[]>([]);
  const [viewerArray, setViewerArray] = useState<IViewer[]>([]);
  const [userArray, setUserArray] = useState<IRating[]>([]);
  const user = useContext(AuthContext);
  useEffect(() => {
    //if a user is logged in, watch for changes to their db
    if (user) {
      db.ref(`users/${user.uid}/ratings`).on('value', (snapshot) => {
        setUserArray(ratingsArray(snapshot, false));
      });

      return () => db.ref(`users/${user.uid}`).off();
    }
  }, [user]);
  useEffect(() => {
    //load the data initially
    const getMovieData = async () => {
      let tempMovieArray: IMovie[] = [];
      try {
        const movies = await db.ref('movies').once('value');
        movies.forEach((snapshot) => {
          tempMovieArray.push({
            title: snapshot.key!,
            date: new Date(snapshot.val().date),
            ratings: ratingsArray(snapshot.child('/ratings'), true),
            id: snapshot.val().id,
            cage: snapshot.val().cage,
          });
        });
        setMovieArray(tempMovieArray);
      } catch (e) {
        console.log(e.message);
      }
    };
    const getViewerData = async () => {
      try {
        let tempViewerArray: IViewer[] = [];
        const viewers = await db.ref('users').once('value');
        viewers.forEach((snapshot) => {
          if (snapshot.val().ratings) {
            tempViewerArray.push({
              name: snapshot.val().displayName,
              ratings: ratingsArray(snapshot.child('/ratings'), false),
              id: snapshot.key!,
            });
          }
        });
        setViewerArray(tempViewerArray);
      } catch (e) {
        console.log(e.message);
      }
    };
    getMovieData();
    getViewerData();
  }, [userArray]);
  return (
    <FirebaseContext.Provider value={{movie: movieArray, viewer: viewerArray, userMovie: userArray}}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
