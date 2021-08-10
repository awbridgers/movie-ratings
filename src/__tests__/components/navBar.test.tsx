import {screen, render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from '../../components/navBar';
import { AuthContext } from '../../firebase/authProvider';
import firebase from 'firebase/app'
import { MovieContext } from '../../types';
import { FirebaseContext } from '../../firebase/provider';

const props = {
  signIn: jest.fn(),
  signOut: jest.fn(),
};
const user = {
  displayName: 'Adam',
  uid: '12334567'
} as firebase.User
const dbContext:MovieContext = {
  movie:[],
  viewer:[],
  userMovie:[],
  displayName: 'Adam'
}

describe('NavBar Component', () => {
  it('renders without crashing',() => {
    render(
      <AuthContext.Provider value = {user}>
        <FirebaseContext.Provider value = {dbContext}>
          <Router>
            <NavBar {...props} />
          </Router>
        </FirebaseContext.Provider>
      </AuthContext.Provider>
    );
    expect(screen.findByText('Home')).toBeTruthy();
  });
it('should render login if no user is logged in', () => {
  render(
    <AuthContext.Provider value = {null}>
      <FirebaseContext.Provider value = {dbContext}>
        <Router>
          <NavBar {...props} />
        </Router>
      </FirebaseContext.Provider>
    </AuthContext.Provider>
  );
  expect(screen.getByText(/Sign In/)).toBeTruthy()
})
it('should show the users name if they are logged in', () => {
  render(
    <AuthContext.Provider value = {user}>
      <FirebaseContext.Provider value = {dbContext}>
        <Router>
          <NavBar {...props} />
        </Router>
      </FirebaseContext.Provider>
    </AuthContext.Provider>
  );
  expect(screen.getByText('Adam')).toBeTruthy();
})
it('should run sign in function when clicked', () => {
  render(
    <AuthContext.Provider value = {null}>
      <FirebaseContext.Provider value = {dbContext}>
        <Router>
          <NavBar {...props} />
        </Router>
      </FirebaseContext.Provider>
    </AuthContext.Provider>
  );
  fireEvent.click(screen.getByText('Sign In'));
  expect(props.signIn).toHaveBeenCalled();
})
it('should run the sign out function when pressed', () => {
  render(
    <AuthContext.Provider value = {user}>
      <FirebaseContext.Provider value = {dbContext}>
        <Router>
          <NavBar {...props} />
        </Router>
      </FirebaseContext.Provider>
    </AuthContext.Provider>
  );
  fireEvent.click(screen.getByText('Adam'));
  fireEvent.click(screen.getByText('Sign Out'));
  expect(props.signOut).toHaveBeenCalled();
})

});
