import React, {useContext, useState} from 'react';
import {FirebaseContext} from './firebase/provider';
import {HashRouter as Router, Route} from 'react-router-dom';
import Movie from './components/movie';
import NavBar from './components/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import ViewerHome from './components/viewerHome';
import ViewerPage from './components/viewerPage';
import Footer from './components/footer';
import ScrollToTop from './components/scrollToTop';
import LogIn from './components/logIn';
import {auth} from './firebase/config';
import SignUp from './components/SignUp';

import ProtectedRoute from './components/protectedRoute';
import Profile from './components/profile';
const App = () => {
  const movies = useContext(FirebaseContext).movie;
  const viewers = useContext(FirebaseContext).viewer;
  const [login, setLogin] = useState<boolean>(false);
  const [logOut, setLogOut] = useState<boolean>(false);
  
  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        setLogOut(true);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  return (
    <div style={{position: 'relative'}}>
      <Router>
      {login && <LogIn type="in" back={() => setLogin(false)} />}
      {logOut && <LogIn type="out" back={() => setLogOut(false)} />}
        <ScrollToTop />
        <NavBar signOut={signOut} signIn={() => setLogin(true)} />
        <div className="appBody">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path = '/join'>
            <SignUp/>
          </Route>
          <ProtectedRoute path = '/profile'>
              <Profile/>
            </ProtectedRoute>
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
            <ViewerHome/>
          </Route>
          {viewers.map((viewer, i) => (
            <Route key={i} path={`/viewers/${viewer.id}`}>
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
