import React, {useContext, useEffect, useState} from 'react';
import {FirebaseContext} from './firebase/provider';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Movie from './components/movie';
import Viewer from './components/viewerCard';
import NavBar from './components/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ratingsArray} from './util/ratingsArray';
import Home from './components/home';
import {IMovie, IRating, IViewer} from './types';
import {getMovie} from './util/getMovie';
import ViewerHome from './components/viewerHome';
import ViewerPage from './components/viewerPage';
import Footer from './components/footer';
import ScrollToTop from './components/scrollToTop';

const App = () => {
  const movies = useContext(FirebaseContext);
  const [viewerData, setViewerData] = useState<IViewer[]>([]);
  useEffect(() => {
    const getViewerData = () => {
      let viewerArray: IViewer[] = [];
      movies.forEach((movie) => {
        movie.ratings.forEach((rating) => {
          const index = viewerArray.findIndex((x) => x.name === rating.name);
          if (index === -1) {
            //not in the array, add the name
            viewerArray.push({
              name: rating.name,
              ratings: [{name: movie.title, score: rating.score}],
            });
          } else {
            //name is already in the array
            viewerArray[index].ratings.push({
              name: movie.title,
              score: rating.score,
            });
          }
        });
      });
      setViewerData(viewerArray);
    };
    getViewerData();
  }, [movies]);
  return (
    <div>
      <Router>
        <ScrollToTop />
        <NavBar />
        <div className="appBody">
          <Route exact path="/">
            <Home />
          </Route>
          {movies.map((movie, i) => (
            <Route path={`/movies/${movie.title.replace(/ /g, '-')}`} key={i}>
              <Movie
                title={movie.title}
                ratings={movie.ratings}
                id={movie.id}
                date={movie.date}
                cage={movie.cage}
              />
            </Route>
          ))}
          <Route exact path="/viewers">
            <ViewerHome viewerData={viewerData} />
          </Route>
          {viewerData.map((viewer) => (
            <Route path={`/viewers/${viewer.name}`}>
              <ViewerPage name={viewer.name} ratings={viewer.ratings} />
            </Route>
          ))}
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
