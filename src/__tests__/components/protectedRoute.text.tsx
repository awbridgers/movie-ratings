import {fireEvent, render, screen} from '@testing-library/react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import ProtectedRoute from '../../components/protectedRoute';
import { AuthContext } from '../../firebase/authProvider';
import firebase from 'firebase/app'
describe('protected route', () => {
  it('should allow access if authenticated', () => {
    render(
      <AuthContext.Provider value = {{} as firebase.User}>
        <BrowserRouter>
        <Link to ='/test'>Click Me</Link>
        <Route path = '/' exact>
          <h1>Home</h1>
        </Route>
          <ProtectedRoute path = '/test'>
            <h1>Test</h1>
          </ProtectedRoute>
        </BrowserRouter>
      </AuthContext.Provider>
    );
    fireEvent.click(screen.getByText('Click Me'));
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
  it('should redirect to home if not authenticated', () => {
    render(
      <AuthContext.Provider value ={null}>
        <BrowserRouter>
        <Link to ='/test'>Click Me</Link>
        <Route path = '/' exact>
          <h1>Home</h1>
        </Route>
          <ProtectedRoute path = '/test'>
            <h1>Test</h1>
          </ProtectedRoute>
        </BrowserRouter>
      </AuthContext.Provider>
    );
    fireEvent.click(screen.getByText('Click Me'));
    expect(screen.getByText('Home')).toBeInTheDocument();
  })


});
